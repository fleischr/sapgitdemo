sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'gitdemo1/test/integration/pages/MainListReport' ,
        'gitdemo1/test/integration/pages/MainObjectPage',
        'gitdemo1/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('gitdemo1') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);