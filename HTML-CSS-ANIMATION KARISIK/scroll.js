.team-header autoshow {
    -webkit-animation: text-appear both;
    -webkit-animation-timeline: scroll(scroller <axis>);
    -webkit-animation-duration:1s;
    -webkit-animation-property: scroll;
}

@-webkit-keyframes text-appear {
    from {
        opacity: 0;
        transform: translateY(0px);
    }

    to {
        opacity: 1;
        transform: translateY(100px);
    }
}