<template>
    <div>
        <hero></hero>
        <div id="main_momentum">
            <h1  class="display-1">What we do</h1>
            <p  class="lead">
                행복한 다람쥐단에서는 2가지 주력 사업을 기반으로<br>
                좋은 컨텐츠를 제작하기위해 다양한 사업을 추진하고 있습니다
            </p>
            <div class="m_container">
                <div class="m_items">
                    <h1 class="display-3">Game</h1>
                    <img src="img/icons/common/game.png" width="200px" height=auto>
                </div>
                <div class="m_items">
                    <h1 class="display-3">VR</h1>
                    <img src="img/icons/common/virtual-reality.svg" width="150px" height=auto>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Hero from "./components/Hero";
    import BasicElements from "./components/BasicElements";
    import Inputs from "./components/Inputs";
    import CustomControls from "./components/CustomControls";
    import Navigation from "./components/Navigation";
    import JavascriptComponents from "./components/JavascriptComponents";
    import Carousel from "./components/Carousel";
    import Icons from "./components/Icons";
    import Examples from "./components/Examples";
    import DownloadSection from "./components/DownloadSection";

export default {
    name: "components",
    components: {
        Hero,
        BasicElements,
        Inputs,
        CustomControls,
        Navigation,
        JavascriptComponents,
        Carousel,
        Icons,
        Examples,
        DownloadSection
    }
};
</script>
<style>
    .m_container{
        display: flex;
        justify-content: center
    }
    .m_items{
        padding-top: 20px;
        padding-right: 100px;
        padding-left: 100px;
    }
    #main_momentum{
        padding-top: 20px;
        text-align: center;
        align-items: center;
        color: #000000;
    }
</style>
