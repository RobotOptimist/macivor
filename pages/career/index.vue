<template>
    <section>
        <page-header title="Career"/>
        <div class="p-4 max-w-viewport">         
            <div class="block xl:flex mt-8">                
                <career-card 
                    logoFileName="hmb-logo" 
                    altText="HMB Logo" 
                    startYear="2019"                    
                    title="HMB">
                    <template v-slot:main-description>
                        <p class="mt-4 text-lg">I returned to consulting at HMB. Here, I seek to improve my knowledge of .NET technologies and improve as a leader.</p>
                    </template>
                    <template v-slot:sub-careers>
                        <career-card 
                            logoFileExtension="svg"
                            title="Unified Trust"
                            duration="Current project"
                            subCard>
                            <template v-slot:svg-content>
                                <div class="bg-indigo-100 rounded-lg ml-4 p-4 sm:p-2 sm:w-3/4 md:w-5/6 lg:w-auto h-full flex flex-col items-center justify-center">
                                    <div class="mx-8 px-4 lg:px-2 py-1 flex flex-col items-center justify-center h-16" style="background-color: rgb(91, 103, 112)">
                                        <unified-trust-logo></unified-trust-logo>
                                        <p class="h-0 overflow-hidden">Unified Trust Logo</p>
                                    </div>  
                                </div>
                            </template>
                            <template v-slot:main-description>
                                <p class="mt-4 text-lg">I joined their cloud transformation project where the team is working on refactoring or rewriting applications to run in Azure. We're using ASP.NET Core, ASP.NET, SQL Server and Oracle Db.</p>
                            </template>
                        </career-card>
                        <career-card 
                            logoFileName="washington_prime_group_logo" 
                            altText="Washington Prime Group Logo" 
                            title="Washington Prime Group"
                            duration="3 months"
                            subCard>
                            <template v-slot:main-description>
                                <p class="mt-4 text-lg">I joined a project in progress porting a Sitefinity project into an upgraded and improved instance of Sitefinity. We used ASP.NET MVC and HTML Agility Pack to scrape content from a forms builder the business favored.</p>
                            </template>
                        </career-card>
                        <career-card 
                            logoFileName="steemer-logo" 
                            altText="Stanley Steemer Logo" 
                            title="Stanley Steemer"
                            duration="9 months"
                            subCard>
                            <template v-slot:main-description>
                                <p class="mt-4 text-lg">I refactored their existing Sitefinity site to be better for web accessibility standards. I also assisted with rewriting pieces of their Angular application - upgrading it from version 5 to version 7. We also used ASP.NET MVC and jQuery. I led a small team consisting of one other developer.</p>
                            </template>
                        </career-card>
                        <career-card 
                            logoFileName="lakeshore-logo" 
                            logoFileExtension="jpg"
                            altText="Lake Shore Cryotronics Logo" 
                            title="Lake Shore Cryotronics"
                            duration="3 months"
                            subCard>
                            <template v-slot:main-description>
                                <p class="mt-4 text-lg">I ported their existing sharepointe based website into Sitefinity. We used ASP.NET MVC and jQuery. I led a small team consisting of two other developers and a business analyst.</p>
                            </template>
                        </career-card>
                    </template>                    
                </career-card>                              
            </div>
            <div class="block xl:flex mt-8">
                <career-card
                    logoFileName="MacIvor_Logo_Color_Small" 
                    altText="MacIvor Technical Logo" 
                    startYear="2018"   
                    endYear="Current (part time)"                 
                    title="MacIvor Technical LLC">
                    <template v-slot:main-description>
                        <p class="mt-4 mb-1 text-lg">I created my own company in order to offer leadership and technology solutions for SafeRx Solutions, a compliance medecine startup.</p>
                        <p class="text-lg">I also created OffCode. It's an in person learning resource to teach people to code. I debuted OffCode at Nationwide Financial where I taught PowerShell and how to make a chrome extension.</p>
                    </template>  
                    <template v-slot:sub-careers>                        
                        <career-card 
                            logoFileName="saferxsolutions" 
                            logoFileExtension="webp"
                            altText="SafeRx Solutions Logo" 
                            title="SafeRx Solutions"
                            duration="2 years"
                            subCard>
                            <template v-slot:main-description>
                                <p class="mt-4 text-lg">I developed their HIPAA compliant patient tracking system using .NET Core WebAPI and Nuxt and SQL Server. I helped develop better security practices. I transitioned the company into better communication practices and tools.</p>
                            </template>
                        </career-card>
                    </template>                                      
                </career-card>
            </div>
            <div class="block xl:flex mt-8 w-full">    
                <career-card 
                    logoFileName="hmb-logo" 
                    altText="HMB Logo"
                    startYear="2017"
                    endYear="2018"
                    title="HMB">
                    <template v-slot:main-description>
                        <p class="mt-4 text-lg">Continuing in my consulting career, I got deeper into CMS projects and started learning a lot about Vue.js. I also did a slew of .NET console, API and MVC projects.</p>
                    </template>
                    <template v-slot:sub-careers>
                        <career-card 
                            logoFileName="meadowbrooke-logo2"
                            altText="Meadowbrooke Logo"
                            title="Meadowbrooke Insurance"
                            duration="4 months"
                            subCard>
                            <template v-slot:main-description>
                                <p class="mt-4 text-lg">At Meadowbrooke, I transformed an ongoing project for their Liquor Liability Portal from a WebForms/jQuery project into an ASP.NET MVC with Vue.js. We also used SQL Server with Entity Framework and Identity Server.</p>
                            </template>
                        </career-card>
                        <career-card 
                            logoFileName="nisource-logo"
                            altText="NiSource Logo"
                            duration="11 months"
                            title="NiSource"
                            subCard>
                            <template v-slot:main-description>
                                <p class="mt-4 text-lg">I helped maintain a Sitefinity multisite instance. I developed features for their surveying tool, NiFast. Finally, I developed a handful of one-off applications to automate various aspects of their infrastructure. We used ASP.NET MVC, jQuery, handlebars.js, PowerShell, and SQL Server</p>
                            </template>
                        </career-card>
                    </template>
                </career-card>                
            </div>
            <div class="block xl:flex mt-8 w-full">
                <career-card 
                    logoFileName="sogeti-logo" 
                    altText="Sogeti Logo" 
                    startYear="2016"
                    endYear="2017"
                    title="Sogeti">
                    <template v-slot:main-description>
                        <p class="mt-4 text-lg">I want to become a better developer so I became a consultant in order to get more experience. I learned about CMS projects and classic frontend development.</p>
                    </template>
                    <template v-slot:sub-careers>                        
                        <career-card 
                            logoFileName="motorists_logo"
                            logoFileExtension="jpg"
                            altText="Mostorists Insurance Logo"
                            title="Motorists Insurance"
                            duration="6 months"
                            subCard>
                            <template v-slot:main-description>
                                <p class="mt-4 text-lg">I helped implement the design for their new agent portal as part of their <a href="https://www.guidewire.com/">guidewire project.</a> We used the Episerver CMS, JavaScript, jQuery and Vue.js.</p>
                            </template>
                        </career-card>
                    </template>
                </career-card>                              
            </div>       
            <div class="block xl:flex mt-8 w-full">
                <career-card 
                    logoFileName="Nationwide-Logo" 
                    altText="Nationwide Financial Logo" 
                    startYear="2006"
                    endYear="2016"
                    title="Nationwide Financial">
                    <template v-slot:main-description>
                        <p class="mt-4 text-lg">I started as customer service. I taught myself to program and automated parts of my job using <a href="https://www.autohotkey.com/">AHK</a> in 2012. I moved to Life Insurance as a Business Analyst. I wrote SQL and Ruby scripts in addition to the usual BA work of documenting requirements and defects. In 2015 I became a .NET Developer working with a Windows Forms distributed application that had a massive SQL Server backend and a .NET batch processing application.</p>                    
                    </template>
                </career-card>  
            </div>       
        </div>
    </section>
</template>

<script>
import pageHeader from "~/components/page-header";
import unifiedTrustLogo from "@/static/logos/unifiedtrust-logo.svg"
import careerCard from "~/components/career-card";
export default {
    components: {
        pageHeader,
        unifiedTrustLogo,
        careerCard
    },
    head() {
    return {
      title: 'James MacIvor\'s Career',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "All of the stuff I've done so far in my career",
        },
      ],
    }
  },
}
</script>