<template>
    <div>
        <page-header title="Company" />
        <section class="article-container">
            <div class="flex justify-center">
                <macivor-logo class="company-logo"></macivor-logo>                
            </div>            
            <article class="text-center" id="mission">
                <h1>Our Mission</h1>
                <p class="max-w-full">To provide the best possible technical service.</p>
                <p class="max-w-full">To develop applications and processes that are effective.</p>
                <p class="max-w-full">To create a culture where developers can learn and grow.</p>
            </article>
            <article class="text-center" id="accomplishments">
                <h1>Our Accomplishments</h1>
                <div class="flex flex-col justify-center items-center">
                    <h2>SafeRx Solutions</h2>
                    <p>We transformed SafeRx Solutions, taking the start up compliance company from humble technical beginnings and introducing them to better operational effectiveness through technology. We introduced them to Slack and expanded their usage of Google GSuite to take advantage of single sign on and improved security.</p>
                </div>      
                <div class="flex flex-col justify-center items-center">
                    <h2>Off Code</h2>
                    <p>We created a learning resource for office workers with desire and aptitude so they can transform their work by using scripting, or creating custom chrome extensions. We taught PowerShell and HTML, CSS and JavaScript. Through weekly meetings and homework during the Spring course of 2019 we assisted a small class at Nationwide Life Insurance to become acquainted with these tools.</p>
                </div>   
                <div class="flex flex-col justify-center items-center">
                    <h2>Mentorship Program</h2>
                    <p>We accepted two interns from Columbus State Community College and taught them how to develop features using .NET Core, EntityFramework, SQL Server, CSS, JavaScript, Vue.js and Nuxt.js. Our interns received high praise from our client for the features they developed, which included improvements to the patient tracking system and entire new workflows for their compliance medecine system. Under guidance, the interns created full stack solutions and unit tests. Both are now employed by IT companies.</p>
                </div>       
            </article>
            <aside class="flex flex-col justify-center items-center">
                <h1>Get In Touch</h1>
                <p>Contact James MacIvor via the link in the footer. We're happy to help!</p>
            </aside>
        </section>
    </div>
</template>

<script>
import pageHeader from "~/components/page-header"
import macivorLogo from "@/static/logos/MacIvor_Logo_Color.svg"
export default {
    components: {
        pageHeader,
        macivorLogo
    },
    head() {
        return {
            title: 'MacIvor Technical LLC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Describing the company, it\'s mission, and it\'s initiatives.'
                }
            ]
        }
    }
}
</script>