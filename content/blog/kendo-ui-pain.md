---
title: Kendo UI - Quick Guide to Grids
description: a supplement to the Telerik docs about Kendo UI grids
date: 2020-10-29
tags: kendo, kendoui, aspnetcore, aspnet
---

<page-header title="Kendo UI - Quick Guide to Grids"></page-header>

::: div container-center

<picture-wrapper file-name="heroes/kendoui" alt-text="Kendo mascot alongside text stating Kendo UI: The Art of Web Development." classes="hero-height-128" ></picture-wrapper>

::: div article-container

You may not have heard of Kendo UI and that's okay. They're yet another one of [Telerik's](https://www.telerik.com/) problem children products, right up there with Sitefinity. The main thing you need to know is that Kendo UI works great as long as you stay strictly within Telerik's suggested use cases. It becomes a nightmare as soon as you attempt something outside of that. 

Perhaps one of the most useful Kendo features is the Grid. The grid is a table with sorting, paging and filtering all built in. It can also hook into your MVC endpoints to read, update and delete that data. Kendo in .NET Core uses jQuery Ajax methods to talk to those endpoints. (Telerik loves jQuery dependencies.)

Grids are strongly typed from your Model as well. They can easily create columns based on your model properties and it's also easy to create additional columns. In fact, Grids are pretty damn awesome as long as you adhere to the strict method of creating them.

Here is some code to get an example grid up and running (This would go inside of a div element on a cshtml page.): 

``` csharp

@(Html.Kendo().Grid<MyModel>()
.Name("MyGrid")
.Columns(columns =>
{
    columns.Command(c => c.Destroy()).Width(50).Title("Command");
    columns.Bound(i => i.Id).Width(50).MinResizableWidth(50).Title("Id");
    columns.Bound(i => i.Name).Width(100).MinResizableWidth(100).Title("Name");
    columns.Bound(i => i.Status).Width(100).MinResizableWidth(100).Title("Status");                
})
.Editable(editable => editable.Mode(GridEditMode.InLine).DisplayDeleteConfirmation(false))
.HtmlAttributes(new { style = "height: 550px;" })
.Scrollable()
.Groupable()
.Sortable()
.Pageable()
.Filterable()
.Resizable(resize => resize.Columns(true))
.DataSource(dataSource => dataSource
    .Custom()
    .Schema(s => s
        .Parse(@<text> 
        function(data) {                        
            if (!data || typeof(data) === 'string' ) 
                data = [{ Id: "N/A", Name: "NA", Status: "N/A" }]
            return data;
        }
        </text>)
        .Model(m =>
        {
            m.Id(p => p.Id);
        }))                    
    .Transport(t =>
    {
        t.Read(r => r.Action("GetMyModels", "ControllerName"));
        t.Destroy(d => d.Action("DeleteAModel", "ControllerName"));
    })
    .PageSize(20))
)

```

Lets talk through all of this. First notice that you have to give the grid a model. This is not optional. There is no dynamic option. You must define a class and provide it to the Grid<> method. You must also give your grid a name. This will become the html id of the grid later. It will allow you to select the grid using jQuery and do ... stuff.

Next we have columns. As stated, columns can be quickly defined using Model properties, but notice that you can also define their width and resize attributes. You can provide them a title as well. You can also, in place of a property, define a Template `column.Template("<div>My Cool Custom Thing</div>")` from here you can also still access a property by using kendo expression syntax: `#=MyModelProperty#` Sometimes you can also use JavaScript expressions between the #= and the #, but that's not always the case. It requires experimentation.

Notice also we can define a Command column. You can have Destroy, Edit, Create and a few others for your Command. You can also define a custom command which will use your own JavaScript. Nice.

You will always need to `.Editable(editable => editable.Mode(GridEditMode.InLine).DisplayDeleteConfirmation(false))` in the case of the delete command otherwise it will popup the basic browser alert statement to ask for confirmation.

Next we have a whole host of things that can be enabled on the grid, `Groupable`, `Sortable`, `Filterable`, `Pageable`, etc. all of these enable features on the grid so a user can mess with the data displayed to get it to their liking.

Finally we have `DataSource`. This one is the biggest pain, but it is absolutely necessary. In the Telerik documentation you will see reference to code like this

``` csharp
DataSource(datasource => datasource
    .Ajax()
    .Read(r => ...))
```

You don't have to bother with that crap. Kendo requires that you set up your endpoints a certain way with a specific wrapper around your data. It's probably fine, I guess - but I prefer to return plain old JSON from my endpoints that has the data I need. There might be additional Kendo magic you can unlock by doing it the other way though. However, all of the paging and sorting etc. works just fine without it.

Instead, the preferable way is to use `Custom()` as shown in the first code example. Doing it this way also makes the schema function available (it's not available for `Ajax()`) where you can run a parse method and transform data from your endpoint if you wish. You can also define a default row (as shown above) if you don't receive expected results. The Model method allows you to define custom fields and use an alternate Id from your model. This is important if you have MVC methods that need to accept different values than the default Id. For example, if you have a delete endpoint that uses the `Name` property then you could said `Model(m => m.Id(p => p.Name))` making it so that value is what is passed to the MVC destroy method by default.

Transport wraps all of the MVC actions and you can use API endpoints from different servers as well as your own MVC endpoints. It provides the most flexibility in retrieving and manipulating your data. It is only available under the `Custom()` method, which is perhaps another reason to never bother with `Ajax()`.

Finally you can define the `PageSize` for items to be displayed on the page.

Now, what if you have some detail data that you want displayed in a sub grid? Well Kendo makes that easy as long as you strictly adhere to their process.

``` csharp
@(Html.Kendo().Grid<MyModel>()
.Name("MyGrid")
.Columns(columns =>
{
    columns.Command(c => c.Destroy()).Width(50).Title("Command");
    columns.Bound(i => i.Id).Width(50).MinResizableWidth(50).Title("Id");
    columns.Bound(i => i.Name).Width(100).MinResizableWidth(100).Title("Name");
    columns.Bound(i => i.Status).Width(100).MinResizableWidth(100).Title("Status");                
})
.ClientDetailTemplateId("template")
.Editable(editable => editable.Mode(GridEditMode.InLine).DisplayDeleteConfirmation(false))
.HtmlAttributes(new { style = "height: 550px;" })
.Scrollable()
.Groupable()
.Sortable()
.Pageable()
.Filterable()
.Resizable(resize => resize.Columns(true))
.DataSource(dataSource => dataSource
    .Custom()
    .Schema(s => s
        .Parse(@<text> 
        function(data) {                        
            if (!data || typeof(data) === 'string' ) 
                data = [{ Id: "N/A", Name: "NA", Status: "N/A" }]
            return data;
        }
        </text>)
        .Model(m =>
        {
            m.Id(p => p.Id);
        }))                    
    .Transport(t =>
    {
        t.Read(r => r.Action("GetMyModels", "ControllerName"));
        t.Destroy(d => d.Action("DeleteAModel", "ControllerName"));
    })
    .PageSize(20))
)
```
``` csharp
<script id="template" type="text/kendo-tmpl">
    @(Html.Kendo().Grid<DetailModel>()
        .Name("template_#=Id#")
        .Columns(columns =>
        {
            columns.Bound(c => c.Address).Width(100).MinResizableWidth(50).Title("Address");
            columns.Bound(c => c.State).Width(100).MinResizableWidth(50).Title("State");
            columns.Bound(c => c.Country).Width(100).MinResizableWidth(50).Title("Country");
        })
        .Scrollable()
        .Groupable()
        .Sortable()
        .Pageable()
        .Filterable()
        .DataSource(dataSource => dataSource
        .Custom()
        .Schema(s => s
            .Parse(@<text>
            function(data) {
                if (!data || typeof(data) === 'string' )
                    data = [{ EmailType: "N/A", NoticeType: "N/A" }]
                return data;
            }
            </text>))
        .Transport(t =>
        {
            t.Read(r => r.Action("GetBounceTrackingDetails", "EDisclosures", new { Id = "#=Id#" }).Data("getParams"));
        })
        .PageSize(20))
        .ToClientTemplate()
    )
</script>
```

Now we have another template wrapped in a script tag. The script tag has an id which must match text in this method: `ClientDetailTemplateId("template")` in your parent grid.

The detail grid is pretty much the same, but keep in mind you'll have to escape the # in any `#=kendo-expression#` in the Columns area. They still work okay everywhere else, probably. You might have JSON with a sub collection and you might wish to pass the sub collection to the Kendo client template. 

Sorry this is impossible. You cannot pass a collection from the parent to the child and expect it to be used in the grid columns. Instead, you have to define yet another endpoint and Kendo will perform an ajax call to retrieve detail information every time detail information is selected by a user. This is suboptimal but that's what Telerik wants and who are we to disagree?

Finally, and maybe  most importantly, you must call `ToClientTemplate()` at the end of the child grid definition. 

Oh, just in case you're like me and you like to use constructors in your models, you must define a parameter-less constructor or the Kendo UI grid will fail silently. Not only will it fail silently, but any HTML defined in your `csthml` file below the grid will fail to be added to the page. The lack of error messages will have you laughing for hours, so sorry to steal the joy of this problem. Define parameter-less constructors and you'll be good to go.

So, Kendo UI is nice when it works and you stay within the defined edge cases. It's a nightmare when you dare to set foot without, so just don't. 

Good luck oh hapless developer. I pray for you.

:::

:::