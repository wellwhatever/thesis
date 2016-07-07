var overState = (function() {

    var exitTo = function(s,fade) {
        gameTitleState.shutdown();
        menu.disable();
        switchState(s,fade);
    };

    var menu = new Menu("GAME OVER",2*tileSize,4*tileSize,mapWidth-4*tileSize,3*tileSize,tileSize,tileSize+"px ArcadeR", "#EEE");
    menu.addSpacer(0.5);
    menu.addTextButton("CLICK TO FILL SURVEY",
        function() {
            practiceMode = false;
            turboMode = false;
            newGameState.setStartLevel(1);
            var win = window.open('https://docs.google.com/forms/d/1HLtITlVF_aFJToT6C20DyOU_WNiZMY2f3pSL-2i37Wc/viewform?edit_requested=true','blank');
        });
    menu.addSpacer(0.5);
    menu.addTextButton("PLAY AGAIN",
        function() {
            switchState(newGameState,60);
        });


    return {
        init: function() {
            menu.enable();
        },
        draw: function() {
            renderer.clearScreen();
            renderer.renderFunc(menu.draw,menu);
        },
        update: function() {
            gameTitleState.update();
        },
        getMenu: function() {
            return menu;
        },
    };
})();




var overState = (function() {
    var frames;
    return {
        init: function() {
            frames = 0;
        },
        draw: function() {
            renderer.blitMap();
            renderer.drawScore();
            renderer.drawMessage("GAME  OVER", "#F00", 9, 20);


        },

        update: function() {
            if (frames == 120) {


              /*
              var win = window.open('https://docs.google.com/forms/d/1HLtITlVF_aFJToT6C20DyOU_WNiZMY2f3pSL-2i37Wc/viewform?edit_requested=true','blank');
              if(win){
                  //Browser has allowed it to be opened
                  win.focus();
                }else{
                  //Broswer has blocked it
                  alert('Please allow popups for this site');
                }
                switchState(newGameState,60);
                */

            }
            else
                frames++;
        },

    };
})();
