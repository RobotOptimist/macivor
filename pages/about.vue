<template>
    <section>        
        <page-header title="About Me" />
        <article class="article-container">
            <div class="container-center">
                <div class="text-center">
                    <h2>I'm not a serious person</h2>
                </div>
                <div class="flex flex-col md:flex-row justify-center m-4">
                    <div class="flex justify-center">
                        <p class="flex items-center">I love working, but I'm not my job. I like a whole bunch of things - most of all I love hanging out with my family. Pictured is my wife Becca and my son Gavin.</p>
                    </div>
                    <div class="flex justify-center">
                        <picture class="w w-3/4 block md:max-w-xs">
                            <source srcset="../assets/images/beccaandgavin.webp" type="image/webp">
                            <source srcset="../assets/images/beccaandgavin.jpg" type="image/jpg">
                            <img class="rounded-lg" src="../assets/images/beccaandgavin.jpg" alt="photo of my family, Becca and Gavin">
                        </picture>
                    </div>
                </div>
                <div class="flex justify-center">
                    <p>I play games, like table top roleplaying games and video games.</p> 
                </div>
                <div class="flex justify-center mb-4">
                    <p>Lately, I've been replaying Final Fantasy VII on my phone and playing Outer Worlds on the Playstation. In the past I've really enjoyed Horizons: Zero Dawn and the The Last of Us.</p>                    
                </div>                
                <div class="flex flex-col md:flex-row justify-center">
                    <div class="flex justify-center w-full lg:w-2/6">
                        <picture class="block md:max-w-xs">
                            <source srcset="../assets/images/outerworlds.webp" type="image/webp">
                            <source srcset="../assets/images/outerworlds.png" type="image/png">
                            <img class="rounded-lg" src="../assets/images/outerworlds.png" alt="Outer Worlds box cover art">
                        </picture>      
                    </div>
                    <div class="flex justify-center w-full lg:w-2/6">
                        <final-fantasy-logo class="svg-logo m-3"></final-fantasy-logo>         
                    </div>                    
                </div>
                <div class="flex justify-center mt-4">
                    <p>On PC, I played Mount and Blade and Battletech quite a bit.</p>
                </div>
                <div class="flex flex-col md:flex-row justify-center">
                    <div class="flex justify-center w-11/12 lg:w-2/6 m-4 pt-20">
                        <picture class="block md:max-w-xs">
                            <source srcset="../assets/images/mountandblade.webp" type="image/webp">
                            <source srcset="../assets/images/mountandblade.png" type="image/png">
                            <img class="rounded-lg" src="../assets/images/mountandblade.png" alt="Mount and Blade logo">
                        </picture>      
                    </div>
                    <div class="flex justify-center w-11/12 lg:w-2/6 m-4">
                        <picture class="block md:max-w-xs">
                            <source srcset="../assets/images/battletech.thumbnail.webp" type="image/webp">
                            <source srcset="../assets/images/battletech.thumbnail.jpg" type="image/jpg">
                            <img class="rounded-lg" src="../assets/images/battletech.thumbnail.jpg" alt="Battletech logo">
                        </picture>      
                    </div>                   
                </div>
                <div class="flex justify-center">
                    <p>When it comes to table top roleplaying games. I love Fate based games. I'm playing in a 13th Age game and Shadowrun game currently. I've also was involved in a multi-year campaign in Adventurer Conqueror King (ACKS). Finally, I've been a game master for years and ran games in D&amp;D, Shadowrun, Spirit of the Century, Pathfinder, Call of Cthuhlu and more.</p>
                </div>
                <div class="flex flex-col md:flex-row justify-center p-4">
                    <div class="flex justify-center lg:w-2/6 m-4">
                        <picture class="block md:max-w-xs">
                            <source srcset="../assets/images/dnd.webp" type="image/webp">
                            <source srcset="../assets/images/dnd.png" type="image/png">
                            <img class="rounded-lg" src="../assets/images/dnd.png" alt="Dungeons and Dragons logo">
                        </picture>      
                    </div>
                    <div class="flex justify-center lg:w-2/6 m-4">
                        <picture class="block md:max-w-xs">
                            <source srcset="../assets/images/shadowrun_logo.webp" type="image/webp">
                            <source srcset="../assets/images/shadowrun_logo.png" type="image/png">
                            <img class="rounded-lg" src="../assets/images/shadowrun_logo.png" alt="Shadowrun logo">
                        </picture>      
                    </div>     
                    <div class="flex justify-center lg:w-2/6 m-4">
                        <picture class="block md:max-w-xs">
                            <source srcset="../assets/images/fate_logo.webp" type="image/webp">
                            <source srcset="../assets/images/fate_logo.jpg" type="image/png">
                            <img class="rounded-lg" src="../assets/images/fate_logo.jpg" alt="Fate logo">
                        </picture>      
                    </div>               
                </div>
                <div class="flex justify-center">
                    <p>I get political from time to time. I love science fiction and fantasy novels, shows and movies.</p> 
                </div>
                <div class="flex justify-center">
                    <p>Coding is fun, and I'm glad to do it as a hobby as well as my job - but I do a bunch of different stuff. It's important not to be one sided, yeah? </p>
                </div>
                <div class="flex justify-center">
                    <p>The common thread is I love whimsy and doing things for the joy of doing it.</p>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
import pageHeader from "~/components/page-header";
import finalFantasyLogo from "@/assets/images/final-fantasy-vii.svg";
export default {
    components: {
        pageHeader,
        finalFantasyLogo
    }
}
</script>