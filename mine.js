
    $('.mClick').click(function() {
      $(".mClick").css("border-bottom",'solid 1px black');
      $(".cClick").css("border-bottom",'solid 0px black');
      $(".iClick").css("border-bottom",'solid 0px black');
      $('.idesc').fadeOut(100, function() {
        $('.cdesc').fadeOut(100, function() {
          $('.mdesc').fadeIn(200);
        });
      });
    });

    $('.cClick').click(function() {
      $(".mClick").css("border-bottom",'solid 0px black');
      $(".cClick").css("border-bottom",'solid 1px black');
      $(".iClick").css("border-bottom",'solid 0px black');
      $('.idesc').fadeOut(100, function() {
        $('.mdesc').fadeOut(100, function() {
          $('.cdesc').fadeIn(200);
        });
      });
    });

    $('.iClick').click(function() {
      $(".mClick").css("border-bottom",'solid 0px black');
      $(".cClick").css("border-bottom",'solid 0px black');
      $(".iClick").css("border-bottom",'solid 1px black');
      $('.mdesc').fadeOut(100, function() {
        $('.cdesc').fadeOut(100, function() {
          $('.idesc').fadeIn(200);
        });
      });
    });




    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 5) || 200;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 100 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };

































    $('.branding').fadeOut(0);
      $('.pack').fadeOut(0);
      $('.prod-des').fadeOut(0);
      $('.ux').fadeOut(0);
      $('.all').fadeIn(500);

    $('#all').click(function(){
      $('.branding').fadeOut(0);
      $('.pack').fadeOut(0);
      $('.prod-des').fadeOut(0);
      $('.ux').fadeOut(0);
      $('.all').fadeIn(500);

      $('#all').css('border' , 'solid 1px #09c');
      $('#all').css('borderRadius' , '5px');
      $('#all').css('padding' , '0px 10px');


      $('#brand').css('border' , 'solid 0px #09c');


      $('#pack').css('border' , 'solid 0px #09c');


      $('#prod').css('border' , 'solid 0px #09c');


      $('#ux').css('border' , 'solid 0px #09c');

    });

    $('#brand').click(function(){
      $('.branding').fadeIn(500);
      $('.pack').fadeOut(0);
      $('.prod-des').fadeOut(0);
      $('.ux').fadeOut(0);
      $('.all').fadeOut(0);




      $('#brand').css('border' , 'solid 1px #09c');
      $('#brand').css('borderRadius' , '5px');
      $('#brand').css('padding' , '0px 10px');


      $('#all').css('border' , 'solid 0px #09c');


      $('#pack').css('border' , 'solid 0px #09c');


      $('#prod').css('border' , 'solid 0px #09c');


      $('#ux').css('border' , 'solid 0px #09c');
    });





    $('#pack').click(function(){
      $('.branding').fadeOut(0);
      $('.pack').fadeIn(500);
      $('.prod-des').fadeOut(0);
      $('.ux').fadeOut(0);
      $('.all').fadeOut(0);



      $('#pack').css('border' , 'solid 1px #09c');
      $('#pack').css('borderRadius' , '5px');
      $('#pack').css('padding' , '0px 10px');


      $('#brand').css('border' , 'solid 0px #09c');


      $('#all').css('border' , 'solid 0px #09c');


      $('#prod').css('border' , 'solid 0px #09c');


      $('#ux').css('border' , 'solid 0px #09c');
    });




    $('#prod').click(function(){
      $('.branding').fadeOut(0);
      $('.pack').fadeOut(0);
      $('.prod-des').fadeIn(500);
      $('.ux').fadeOut(0);
      $('.all').fadeOut(0);

      $('#prod').css('border' , 'solid 1px #09c');
      $('#prod').css('borderRadius' , '5px');
      $('#prod').css('padding' , '0px 10px');


      $('#brand').css('border' , 'solid 0px #09c');


      $('#pack').css('border' , 'solid 0px #09c');


      $('#all').css('border' , 'solid 0px #09c');


      $('#ux').css('border' , 'solid 0px #09c');
    });





    $('#ux').click(function(){
      $('.branding').fadeOut(0);
      $('.pack').fadeOut(0);
      $('.prod-des').fadeOut(0);
      $('.ux').fadeIn(500);
      $('.all').fadeOut(0);


      $('#ux').css('border' , 'solid 1px #09c');
      $('#ux').css('borderRadius' , '5px');
      $('#ux').css('padding' , '0px 10px');


      $('#brand').css('border' , 'solid 0px #09c');


      $('#pack').css('border' , 'solid 0px #09c');


      $('#prod').css('border' , 'solid 0px #09c');


      $('#all').css('border' , 'solid 0px #09c');

    });




    var first=500;
    var second=400;
    var third=200;
    var forth=800;
    var x=0 , y=0 ,z=0 , o=0;
    function inc(){
      if(x<first){
        x+=1;
        document.getElementById('n1').innerHTML = ""+x;
      }
      if(y<second){
        y+=1;
        document.getElementById('n2').innerHTML = ''+y;
      }
      if(z<third){
        z+=1;
        document.getElementById('n3').innerHTML = ''+z;
      }
      if(o<forth){
        o+=1;
        document.getElementById('n4').innerHTML = ''+o;
      }
    }
    setInterval(inc,10);