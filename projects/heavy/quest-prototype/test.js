var butncheck = document.querySelector(".check-candles");
butncheck.addEventListener("click", function() {
  candle.candle0 = 0;
})

var createImage = function(src, title, classes) {
  var img = new Image();
  img.src = src;
  img.alt = title;
  img.title = title;
  img.className = classes;
  return img;
};
var abc = document.querySelector(".overlayShadow");
abc.appendChild(createImage("img/candle-0.png", "Candle-bed", "Candle-bed candle-opacity-hidden"));
abc.appendChild(createImage("img/candle-25.gif", "Candle-bed", "Candle-bed candle-opacity-hidden"));
abc.appendChild(createImage("img/candle-50.gif", "Candle-bed", "Candle-bed candle-opacity-hidden"));
abc.appendChild(createImage("img/candle-75.gif", "Candle-bed", "Candle-bed candle-opacity-hidden"));
abc.appendChild(createImage("img/candle-100.gif", "Candle-bed", "Candle-bed"));
abc.appendChild(createImage("img/candle-0.png", "Candle-stones", "Candle-stones candle-opacity-hidden"));
abc.appendChild(createImage("img/candle-25.gif", "Candle-stones", "Candle-stones candle-opacity-hidden"));
abc.appendChild(createImage("img/candle-50.gif", "Candle-stones", "Candle-stones candle-opacity-hidden"));
abc.appendChild(createImage("img/candle-75.gif", "Candle-stones", "Candle-stones candle-opacity-hidden"));
abc.appendChild(createImage("img/candle-100.gif", "Candle-stones", "Candle-stones"));

var checkLastFire = false;
var checkLastFireStone = false;
setInterval(function() {
  for (let [key, value] of Object.entries(candle)) {
    var abc = document.querySelectorAll(".Candle-bed")
    var candleStones = document.querySelectorAll(".Candle-stones")
    var array999 = new Array;
    array999.push(abc)
    array999.push(candleStones)
    var eArr = array999.values();
    for (let letter of eArr) {
      console.log(letter);
      var jojo = letter;
      for (var i = 0; i <= abc.length; i++) {
        if (i == 0 && value == 1 && key == "candle" + j && checkLastFire == false) {
          jojo[i + 1].classList.toggle("candle-opacity-hidden")
          jojo[i].classList.toggle("candle-opacity-hidden")
          checkLastFire = true;
        } else if (i == 1 && value == 0.75 & key == "candle" + 0) {
          jojo[i + 1].classList.toggle("candle-opacity-hidden")
          jojo[i].classList.toggle("candle-opacity-hidden")
        } else if (i == 2 && value == 0.50 & key == "candle" + 0) {
          jojo[i + 1].classList.toggle("candle-opacity-hidden")
          jojo[i].classList.toggle("candle-opacity-hidden")
        } else if (i == 3 && value == 0.25 & key == "candle" + 0) {
          jojo[i + 1].classList.toggle("candle-opacity-hidden")
          jojo[i].classList.toggle("candle-opacity-hidden")
        } else if (i == 4 && value == 0 & key == "candle" + 0) {}

      }
    }
  }
}, 4999)

// setInterval(function() {
//   for (let [key, value] of Object.entries(candle)) {
//     var candleStones = document.querySelectorAll(".Candle-stones")
//     for (var i = 0; i <= candleStones.length; i++) {
//       if (i == 0 && value == 1 && key == "candle"+ 1 && checkLastFireStone == false ) {
//         candleStones[i+1].classList.toggle("candle-opacity-hidden")
//         candleStones[i].classList.toggle("candle-opacity-hidden")
//         checkLastFire = true;
//       } else if (i == 1 && value == 0.75 & key == "candle"+ 1) {
//         candleStones[i+1].classList.toggle("candle-opacity-hidden")
//         candleStones[i].classList.toggle("candle-opacity-hidden")
//       } else if (i == 2 && value == 0.50 & key == "candle"+ 1) {
//       candleStones[i+1].classList.toggle("candle-opacity-hidden")
//       candleStones[i].classList.toggle("candle-opacity-hidden")
//     } else if (i == 3 && value == 0.25 & key == "candle"+ 1) {
//       candleStones[i+1].classList.toggle("candle-opacity-hidden")
//       candleStones[i].classList.toggle("candle-opacity-hidden")
//     } else if (i == 4 && value == 0 & key == "candle"+ 1) {
//       }
//     }
//   }
// }, 4999)

var texts = {
  pedistalText: function() {
    function timer(v) {
      return new Promise(function(r) {
        return setTimeout(r, v);
      });
    }

    async function load() {
      var myString = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";
      var myArray = myString.split("");
      var loopTimer;
      for (var i = 0; i < myArray.length; i++) {
        function frameLooper() {
          if (myArray.length > 0) {
            document.getElementById("myTypingText").innerHTML += myArray.shift();
          } else {
            clearTimeout(loopTimer);
            return false;
          }
          loopTimer = setTimeout('frameLooper()', 70);
        }
        frameLooper();
        await timer(70);
      }

    }
    load()
  },
  clearText: function() {
    var abc = document.getElementById("myTypingText")
    abc.innerHTML = ''
    if (your_string.indexOf('') > -1) {
      alert("hello found inside your_string");
    }
  }

}

var listnerss = {
  fireplaceEvent: function(a, b) {
    let Man = document.getElementsByClassName("animation")[0];
    var here = Man.style.top
    here = parseInt(here, 10);
    var top = a - here;
    top = top + here
    Man.src = "img/Animation_up.gif"
    if (Man.style.top === top + "px") {
      Man.src = "img/Animation_stand.png"
      return;
    } else {
      Man.style.top = top + "px";
      setTimeout(function() {
        Man.src = "img/Animation_stand.png"
        document.querySelector(".main-text").textContent = "Похоже на печку. Да, это определенно печка, или камин, хотя кто их знает, может сейчас это называется как-то по-другому... неделя прибывания на природе отбирает последние остатки человечности..."
        var emo = document.quer0ySelector(".emotion")
        emo.style.opacity = "1";
      }, 3000)
    }
    //увеличь своего пасана на 33% гдет он мелкий пиздец
    // текст с анимацией должен появлятеся а не сразу, у

  },
  moveEvent: function() {
    var element = document.querySelector('.test');
    var ele = getComputedStyle(element);
    var xx = ele.top;
    var yy = ele.left;
    var eheight = ele.height;
    var ewidth = ele.width;
    ewidth = parseInt(ewidth, 10);
    eheight = parseInt(eheight, 10);
    xx = parseInt(xx, 10);
    yy = parseInt(yy, 10)

    function timer(v) {
      return new Promise(function(r) {
        return setTimeout(r, v);
      });
    }

    async function load() {
      var j = yy
      var i = xx
      if (yy < 200) {
        for (i; i < 600; i++) {
          if (i < 332) {
            element.style.top = [i] + "px";

          } else if (j >= 400) {
            element.style.top = [i] + "px";
          } else if (j <= 400) {
            element.style.left = [j] + "px";
            i--
          } else {
            i--
          }
          j++
          await timer(15);
          if (i == i) {
            for (j; j < 300; j++) {
              element.style.left = [j] + "px";
              break
            }

          }
          if (i >= 535) {
            j = 400
            for (i; i < 600; i++) {
              element.style.top = [i] + "px";
              j--
              j--
              await timer(15);
              if (i == i) {
                for (j; j > 300; j--) {
                  element.style.left = [j] + "px";
                  break
                }

              }
              // for (j; j > 300; j--) {
              //   element.style.left = [j] + "px";
              //   await timer(15);
              //   if (j > 300){
              //
              //   }
              // }}

            }
          }
        }
      } else {
        for (i; i < 600; i++) {
          if (i < 332) {
            element.style.top = [i] + "px";
          } else if (i > 332 && j <= 142) {
            element.style.top = [i] + "px";;
          }
          j--
          await timer(15);
          if (i == i) {
            if (j >= 195 && i > 332) {
              for (j; j > 250; j++) {
                element.style.left = [j] + "px";
                break
              }
            }
            // for (j; j < 250; j--) {
            //   element.style.left = [j] + "px";
            //   break
            // }



          }
          // if (i >= 535) {
          //   j = 400
          //   for (i; i < 600; i++) {
          //       element.style.top = [i] + "px";
          //     j--
          //     j--
          //     await timer(15);
          //     if (i == i) {
          //       for (j; j > 300; j--) {
          //         element.style.left = [j] + "px";
          //         break
          //       }
          //
          //     }
          // for (j; j > 300; j--) {
          //   element.style.left = [j] + "px";
          //   await timer(15);
          //   if (j > 300){
          //
          //   }
          // }}
          // }}
        }
      }
    }

    load();
  },
  showClass: function(el) {
    alert(el.className)
  },
  testEvent: function(a, b, c) {
    var vall = c.className
    var abc = document.querySelector(".test");
    // abc.src = "img/fireplace-highlight.png";
    // top = top - b;
    var tran = document.getElementsByClassName("animation")[0];
    let Man = document.getElementsByClassName("animation")[0];
    var ManWidth = Man.width / 2;
    var ManHight = Man.height / 2;
    var x = Man.style.top
    var y = Man.style.left
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    var top = a - x;
    top = top + x
    top = top - ManHight;
    var left = b - y;
    left = left + y
    left = left - ManWidth;
    var kkk = x - a
    var ggg = y - b
    var eee = ggg + kkk
    // 560 - 500
    // 560 - 350
    // 560 - 580
    // 560 - 210
    if (x <= a) { //вверх или вниз
      //560 > 500 test
      //560 > 350 test2
      //560 < 580 test3
      //560 > 210 test4
      if (eee >= 50 || eee <= -50 && eee < 200) { //210 < 100
        //как быстро пойдет
        tran.style.transition = "all 1s linear"
        Man.src = "img/Animation_down.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 1000)
      } else if (eee >= 150 && eee < 400) {
        tran.style.transition = "all 2s linear"
        Man.src = "img/Animation_down.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 2000)
      } else {

        tran.style.transition = "all 3s linear"
        Man.src = "img/Animation_down.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 3000)
      }

    } else {

      if (eee >= 50 || eee >= -50 && eee < 200) { //210 > 100
        tran.style.transition = "all 1s linear"
        Man.src = "img/Animation_up.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 1000)
      } else if (eee >= 150 && eee < 400) {
        tran.style.transition = "all 2s linear"
        Man.src = "img/Animation_up.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 2000)
      } else {
        tran.style.transition = "all 3s linear"
        Man.src = "img/Animation_up.gif"
        Man.style.top = top + "px";
        Man.style.left = left + "px"
        setTimeout(function() {
          Man.src = "img/Animation_stand_front.png"
          // document.querySelector(".main-text").textContent = "Тест АВЫРВАЛГ"
          // var emo = document.querySelector(".emotion")
          // emo.style.opacity = "1";
        }, 3000)
      }
    }
  }
  // if (Man.style.top === top + "px") {
  //   Man.src = "img/Animation_stand_front.png"
  //   return;
  // } else {}

  // если идем наверх то сравнение больше меньше изначального числа если больше то анимация наверх ну ты понел
}
// houseEvent: function () {
//   var abcc = document.querySelector(".house");
//   abcc.addEventListener("click", function functionName(event) {
//     var elementClicked = event.target;
//     elementClicked.src = "img/fireplace.png";
//     if (!e) var e = window.event;
//   e.cancelBubble = true;
//   if (e.stopPropagation) e.stopPropagation();
//   })
// }
//----------------------------------------------------------
var reqID, dir;
var p, t, pw, ph, px, py, tw, th, tx, ty, u;
var aaa = true
var check = true;
// This function will be set to repeat very fast
function detectCollisions() {
  /* Loop over the array to access each element in -
     the array one by one in succession */
  for (i = 0; i < t.length; i++) {
    // Access the current location and dimension of both objects
    pw = p.offsetWidth;
    ph = p.offsetHeight;
    px = p.offsetLeft;
    py = p.offsetTop;
    tw = t[i].offsetWidth;
    th = t[i].offsetHeight;
    tx = t[i].offsetLeft;
    ty = t[i].offsetTop;



    // Check to see if player has intersected with this element in any direction
    if ((px + pw) > tx && px < (tx + tw) && (py + ph) > ty && py < (ty + th)) {
      // Do anything you want in the program when collision is detected
      stopAnimation()
      var a = i;
      if (a == 0) {
        let abc = document.querySelector(".fireplace");
        abc.src = "img/fireplace-highlight.png";
        aaa == false
      } else if (a == 1) {
        let abc = document.querySelector(".work-table");
        abc.src = "img/work_table-highlight.png";
        aaa == false
      } else if (a == 2) {
        let abc = document.querySelector(".cupboard");
        abc.src = "img/cupboard-highlight.png";
        aaa == false
      } else if (a == 3) {
        let abc = document.querySelector(".dinner_table");
        abc.src = "img/dinner_table-highlight.png";
        aaa == false
      } else if (a == 4) {
        let abc = document.querySelector(".spinning_weel");
        abc.src = "img/spinning_weel-highlight.png";
        aaa == false
      } else if (a == 5) {
        let abc = document.querySelector(".pedestal");
        abc.src = "img/pedestal-highlight.png";
        aaa == false
        const buttonElement = document.getElementById('fire');
        buttonElement.addEventListener('click', function(event) {
          if (a == 5 && check == true) {
            texts.pedistalText();
            check = false;
          }
        })
      } else if (a == 6 && aaa == true) {
        let abc = document.querySelector(".lamp");
        abc.src = "img/Lamp-highlight.png";
        aaa == false
      } else if (a == 7 && aaa == true) {
        let abc = document.querySelector(".bed");
        abc.src = "img/bed-highlight.png";
        aaa == false
      }

    }
  }
  // This makes the detectCollisions() function repeat very quickly
  window.requestAnimationFrame(detectCollisions);
}

function detectCollisionsShadows() {
  /* Loop over the array to access each element in -
     the array one by one in succession */
  for (i = 0; i < u.length; i++) {
    // Access the current location and dimension of both objects
    pw = p.offsetWidth;
    ph = p.offsetHeight;
    px = p.offsetLeft;
    py = p.offsetTop;
    uw = u[i].offsetWidth;
    uh = u[i].offsetHeight;
    ux = u[i].offsetLeft;
    uy = u[i].offsetTop;



    // Check to see if player has intersected with this element in any direction
    if ((px + pw) > ux && px < (ux + uw) && (py + ph) > uy && py < (uy + uh)) {
      // Do anything you want in the program when collision is detected
      var a = i;
      if (a == 0) {
        console.log("colisson")
      } else if (a == 1) {
console.log("colisson")
      } else if (a == 2) {
        console.log("colisson")
      } else if (a == 3) {
console.log("colisson")
      } else if (a == 4) {
console.log("colisson")
      } else if (a == 5) {
console.log("colisson")
      }
    }
  }
  window.requestAnimationFrame(detectCollisionsShadows);
}
// This makes the detectCollisions() function repeat very quickly



// This function simply changes the direction the object will move
function changeDir(d) {
  dir = d;
}
// This function moves the player(thing1)
function startAnimation() {
  var a = 0;
  if (dir == "Right") {
    p.style.left = (p.offsetLeft += 2) + 'px';
    s.style.left = (s.offsetLeft += 2) + 'px';
    Overlap();
    CheckedTrue(aaa);
    if (check == false) {
      texts.clearText();
      check = true
    }
  } else if (dir == "Left") {
    p.style.left = (p.offsetLeft -= 2) + 'px';
    s.style.left = (s.offsetLeft -= 2) + 'px';
    Overlap();
    CheckedTrue(aaa);
  } else if (dir == "Up") {
    // a++
    // trigger(a)
    Overlap();
    CheckedTrue(aaa);
    p.style.top = (p.offsetTop -= 2) + 'px';
    s.style.top = (s.offsetTop -= 2) + 'px';
  } else if (dir == "Down") {
    // a++
    // trigger(a)
    p.style.top = (p.offsetTop += 2) + 'px';
    s.style.top = (s.offsetTop += 2) + 'px';
    Overlap();
    CheckedTrue(aaa);
  } else if (dir == "Left-Up") {
    p.style.left = (p.offsetLeft -= 2) + 'px';
    p.style.top = (p.offsetTop -= 2) + 'px';
    s.style.left = (s.offsetLeft -= 2) + 'px';
    s.style.top = (s.offsetTop -= 2) + 'px';
    Overlap();
    CheckedTrue(aaa);
  } else if (dir == "Left-Down") {
    p.style.left = (p.offsetLeft -= 2) + 'px';
    p.style.top = (p.offsetTop += 2) + 'px';
    s.style.left = (s.offsetLeft -= 2) + 'px';
    s.style.top = (s.offsetTop += 2) + 'px';
    Overlap();
    CheckedTrue(aaa);
  } else if (dir == "Right-Up") {
    p.style.left = (p.offsetLeft += 2) + 'px';
    p.style.top = (p.offsetTop -= 2) + 'px';
    s.style.left = (s.offsetLeft += 2) + 'px';
    s.style.top = (s.offsetTop -= 2) + 'px';
    Overlap();
    CheckedTrue(aaa);

  } else if (dir == "Right-Down") {
    p.style.left = (p.offsetLeft += 2) + 'px';
    p.style.top = (p.offsetTop += 2) + 'px';
    s.style.left = (s.offsetLeft += 2) + 'px';
    s.style.top = (s.offsetTop += 2) + 'px';
    Overlap();
    CheckedTrue(aaa);
  }


  reqID = window.requestAnimationFrame(startAnimation);
}
// var triggerOnce = true;
// function trigger(a){
// if (a == 1) {
// var Man = document.getElementsByClassName("animation")[0];
// if ( dir == "Up" && triggerOnce == true ) {
//   triggerOnce = false;
//   Man.src = "img/Animation_up.gif"
// } else if (dir == "Down" && triggerOnce == true){
//   triggerOnce = false;
//   Man.src = "img/Animation_down.gif"
// }}}
function stopAnimation() {
  window.cancelAnimationFrame(reqID);
}
// The window load event fires this function
// This function is where you get everything ready in the program after document is fully loaded
function docReady() {
  // Get object references for elements we are scripting against
  p = document.querySelector(".animation");
  t = document.getElementsByClassName("things");
  u = document.getElementsByClassName("shadow-collision");
  s = document.querySelector(".animation_shadow")
  // Start up the collision detection function
  detectCollisions();
  detectCollisionsShadows();
}
// The window load event listener
window.addEventListener("load", docReady);

//----------------------------------------------------------

document.querySelector(".fireplace").addEventListener("mouseover", function(event) {
  var abc = document.querySelector(".fireplace");
  this.src = "img/fireplace-highlight.png";
}, false);
document.querySelector(".fireplace").addEventListener("mouseleave", function(event) {
  this.src = "img/fireplace.png";
}); //мб через цсс? ну ховер там и все дела? не?
// купи булки Серёжа

function AnimationStand() {
  let Man = document.getElementsByClassName("animation")[0];
  if (dir == "Right") {
    Man.src = "img/Animation_stand-right.png"
  } else if (dir == "Left") {
    Man.src = "img/Animation_stand-left.png"
  } else if (dir == "Up") {
    Man.src = "img/Animation_stand-up.png"
  } else if (dir == "Down") {
    Man.src = "img/Animation_stand-down.png"
  } else if (dir == "Left-Up") {
    Man.src = "img/Animation_stand-left-up.png"
  } else if (dir == "Left-Down") {
    Man.src = "img/Animation_stand-left-down.png"
  } else if (dir == "Right-Up") {
    Man.src = "img/Animation_stand-right-up.png"
  } else if (dir == "Right-Down") {
    Man.src = "img/Animation_stand-right-down.png"
  }
}

function AnimationWalk() {
  let Man = document.getElementsByClassName("animation")[0];
  if (dir == "Right") {
    Man.src = "img/Animation_right.gif"
  } else if (dir == "Left") {
    Man.src = "img/Animation_left.gif"
  } else if (dir == "Up") {
    Man.src = "img/Animation_up.gif"
  } else if (dir == "Down") {
    Man.src = "img/Animation_down.gif"
  } else if (dir == "Left-Up") {
    Man.src = "img/Animation_left-up.gif"
  } else if (dir == "Left-Down") {
    Man.src = "img/Animation_left-down.gif"
  } else if (dir == "Right-Up") {
    Man.src = "img/Animation_right-up.gif"
  } else if (dir == "Right-Down") {
    Man.src = "img/Animation_right-down.gif"
  }
}

function CheckedTrue(aaa) {
  if (aaa == true) {
    let abc = document.querySelector(".fireplace");
    abc.src = "img/fireplace.png";
    let abc1 = document.querySelector(".work-table");
    abc1.src = "img/work_table.png";
    let abc2 = document.querySelector(".cupboard");
    abc2.src = "img/cupboard.png";
    let abc3 = document.querySelector(".dinner_table");
    abc3.src = "img/dinner_table.png";
    let abc4 = document.querySelector(".spinning_weel");
    abc4.src = "img/spinning_weel.png";
    let abc5 = document.querySelector(".pedestal");
    abc5.src = "img/pedestal.png";
    let abc6 = document.querySelector(".lamp");
    abc6.src = "img/Lamp.png";
    let abc7 = document.querySelector(".bed");
    abc7.src = "img/bed.png";
  }

  // var itemss = [".fireplace",".work-table",".fireplace",".work-table",".cupboard",".dinner_table",".spinning_weel",".pedestal",".lamp",".bad"];
  // if (aaa == true) {
  //   for (let i = 0; i < itemss.length; i++ ){
  //   var abc = document.querySelector(itemss[i]);
  //   var source = itemss[i] + ".png"
  //   source = source.substr(1);
  //   abc.src = string(source);
  //
  //   }
  // }
}

function Overlap() {
  var abc = document.getElementsByClassName("animation")[0];
  var x = abc.style.top
  x = parseInt(x, 10);
  if (x <= 225) {
    document.getElementsByClassName('dinner_table')[0].style.zIndex = "98";
    document.getElementsByClassName('chair_dinner-bottom')[0].style.zIndex = "99";
  } else if (x >= 225) {
    document.getElementsByClassName('dinner_table')[0].style.zIndex = "0";
    document.getElementsByClassName('chair_dinner-bottom')[0].style.zIndex = "0";
  }
}
// document.getElementsByClassName("spinning_weel_chair")[0].style.zIndex = "0";
//   } else if (x >= 514) {
//     document.getElementsByClassName("spinning_weel_chair")[0].style.zIndex = "99";
//   } else if (x <= 514) {
//     document.getElementsByClassName("spinning_weel_chair")[0].style.zIndex = "0";
//   }
// }

var fired = false;
window.addEventListener("keydown", function(event) {

  if (!fired) {
    fired = true;
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        changeDir('Down');
        startAnimation();
        AnimationWalk('Down')
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        changeDir('Up');
        startAnimation();
        AnimationWalk('Up')
        // Do something for "up arrow" key press.
        break;
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        changeDir('Left');
        startAnimation();
        AnimationWalk('Left')
        // Do something for "left arrow" key press.
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        changeDir('Right');
        startAnimation();
        AnimationWalk('Right')
        // Do something for "right arrow" key press.
        break;
      case "Enter":
        // Do something for "enter" or "return" key press.
        break;
      case "Esc": // IE/Edge specific value
      case "Escape":
        // Do something for "esc" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }
}, true);

window.addEventListener("keyup", function(event) {
  fired = false;
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
      stopAnimation();
      AnimationStand('Down');
      // сделать чтоб кнопки нажимались, будто мышкой, ну ты понял css
      break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
      stopAnimation();
      AnimationStand('Up');
      // Do something for "up arrow" key press.
      break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      stopAnimation();
      AnimationStand('Left');
      // Do something for "left arrow" key press.
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      stopAnimation();
      AnimationStand('Right');
      // Do something for "right arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);


var abcc = document.querySelector(".fireplace");
abcc.addEventListener("click", function functionName(event) {
  console.log(event)
})
// var fill = document.querySelectorAll(".fill");
// var empties = document.querySelector(".empty");
//fill listnerss


// function addEventListenerByClass(className, event, fn) {
//     var list = document.getElementsByClassName(className);
//     for (var i = 0, len = list.length; i < len; i++) {
//         list[i].addEventListener(event, fn, false);
//     }
// }
//
// addEventListenerByClass('fill', 'dragstart', dragStart);
// addEventListenerByClass('fill', 'dragend', dragEnd);
// const divyArray = Array.from(fill)

//drag functions
// function dragStart() {
//   this.className += ' hold';
// requestAnimationFrame(inv)
// function inv() {
// fill.classList.add("invisible")
// }
//   setTimeout(() => (this.className = 'invisible'), 0);
// }

// empties.addEventListener("dragover", dragOver);
// empties.addEventListener("dragenter", dragEnter);
// empties.addEventListener("dragleave", dragLeave);
// empties.addEventListener("drop", dragDrop);
//
// function dragEnd() {
//   this.className = "fill"
// }
//
// function dragOver(event) {
//   event.preventDefault();
// }
//
// function dragEnter(event) {
//   event.preventDefault();
//   this.className += " hovered"
// }
//
// function dragLeave() {
//   this.className = "empty";
// }
//
// function dragDrop(event) {
//   this.className = "empty";
//   if (this.event){}
//   this.append(divyArray[1]);
// }

var checkEnded = false;

var candle = {
  'candle0': 0,
  'candle1': 0,
  'candle2': 0,
  'candle3': 0,
  'candle4': 0
}

var ooo = {
  candleEvent: function(abc) {
    return candle[abc]
  }

}
// for (var i = 0; i < Object.keys(candle).length; i++) {
var timerCheck = setInterval(function() {
  for (let [key, value] of Object.entries(candle)) {
    var candleBed = document.querySelector(".Candle-bed")
    var candleStones = document.querySelector(".Candle-stones")
    var candleWorkTable = document.querySelector(".Candle-work_table")
    var candleFireplace = document.querySelector(".Candle-fireplace")
    var candleDinnerTable = document.querySelector(".Candle-dinner_table")
    var lightBed = document.querySelector(".shadow-candle-bed")
    var underlightBed = document.querySelector(".shadow-candle-bed-2")
    var lightStones = document.querySelector(".shadow-candle-stones")
    var lightWorkTable = document.querySelector(".shadow-candle-work-table")
    var lightFireplace = document.querySelector(".shadow-candle-fireplace")
    var lightDinnerTable = document.querySelector(".shadow-candle-dinner-table")

    var varArrayCandle = new Array;
    varArrayCandle.push(candleBed);
    varArrayCandle.push(candleStones);
    varArrayCandle.push(candleWorkTable);
    varArrayCandle.push(candleFireplace);
    varArrayCandle.push(candleDinnerTable);
    var varArrayLight = new Array;
    varArrayLight.push(lightBed);
    varArrayLight.push(lightStones);
    varArrayLight.push(lightWorkTable);
    varArrayLight.push(lightFireplace);
    varArrayLight.push(lightDinnerTable);


    for (var i = 0; i <= Object.keys(candle).length; i++) {
      var abc = 0
      abc = i
      if (key == "candle" + abc && value == 0) {
        console.log(key + "check1")

        // for (var i = 0; i < varArrayCandle.length; i++) {
        //   varArrayCandle[i].src = "img/candle-100.gif"
        // }
        // var imma = document.querySelectorAll(".Candle-bed");
        // for (var i = 0; i < imma.length; i++) {
        //
        // }
        // candleBed.src = "img/candle-100.gif"
        setTimeout(() => {
          underlightBed.style.opacity = "0"
        }, 10)
        setTimeout(() => {
          lightBed.src = "img/candle_light_bed-shadow-0.png"
          lightBed.className = "shadow-candle-bed_0";
          lightBed.className += " shadow-candle-bed"
          lightBed.style.opacity = "1"
        }, 100)
        lightStones.src = "img/candle_light_stones-shadow-0.png"
        lightStones.className = "shadow-candle-stones_0";
        lightStones.className += " shadow-candle-stones"
        lightWorkTable.src = "img/candle_light_work_table-shadow-0.png"
        lightWorkTable.className = "shadow-candle_table_0";
        lightWorkTable.className += " shadow-candle-work-table"
        lightFireplace.src = "img/candle_light_fireplace-shadow-0.png"
        lightFireplace.className = "shadow-candle_fireplace_0";
        lightFireplace.className += " shadow-candle-fireplace"
        lightDinnerTable.src = "img/candle_light_table_dinner-shadow-0.png"
        lightDinnerTable.className = "shadow-candle-dinner_table_0";
        lightDinnerTable.className += " shadow-candle-dinner-table"
      } else if (key == "candle" + abc && value == 0.25) {
        console.log(key + "check2")
        // for (var i = 0; i < varArrayCandle.length; i++) {
        //   varArrayCandle[i].src = "img/candle-75.gif"
        // }
        // candleBed.src = "img/candle-100.gif"
        setTimeout(() => {
          lightBed.style.opacity = "0"
        }, 10)
        setTimeout(() => {
          underlightBed.src = "img/candle_light_bed-shadow-25.png";
          underlightBed.className = "shadow-candle-bed_25";
          underlightBed.className += " shadow-candle-bed-2";
          underlightBed.style.opacity = "1";
        }, 100)

        lightStones.src = "img/candle_light_stones-shadow-25.png"
        lightStones.className = "shadow-candle-stones_25";
        lightStones.className += " shadow-candle-stones"
        lightWorkTable.src = "img/candle_light_work_table-shadow-25.png"
        lightWorkTable.className = "shadow-candle_table_25";
        lightWorkTable.className += " shadow-candle-work-table"
        lightFireplace.src = "img/candle_light_fireplace-shadow-25.png"
        lightFireplace.className = "shadow-candle_fireplace_25";
        lightFireplace.className += " shadow-candle-fireplace"
        lightDinnerTable.src = "img/candle_light_table_dinner-shadow-25.png"
        lightDinnerTable.className = "shadow-candle-dinner_table_25";
        lightDinnerTable.className += " shadow-candle-dinner-table"

      } else if (key == "candle" + abc && value == 0.5) {
        console.log(key + "check3")
        // for (var i = 0; i < varArrayCandle.length; i++) {
        //   varArrayCandle[i].src = "img/candle-50.gif"
        // }
        // candleBed.src = "img/candle-100.gif"
        setTimeout(() => {
          underlightBed.style.opacity = "0"
        }, 10)
        setTimeout(() => {
          lightBed.src = "img/candle_light_bed-shadow-50.png"
          lightBed.className = "shadow-candle-bed_50";
          lightBed.className += " shadow-candle-bed"
          lightBed.style.opacity = "1";
        }, 100)

        lightStones.src = "img/candle_light_stones-shadow-50.png"
        lightStones.className = "shadow-candle-stones_50";
        lightStones.className += " shadow-candle-stones"
        lightWorkTable.src = "img/candle_light_work_table-shadow-50.png"
        lightWorkTable.className = "shadow-candle_table_50";
        lightWorkTable.className += " shadow-candle-work-table"
        lightFireplace.src = "img/candle_light_fireplace-shadow-50.png"
        lightFireplace.className = "shadow-candle_fireplace_50";
        lightFireplace.className += " shadow-candle-fireplace"
        lightDinnerTable.src = "img/candle_light_table_dinner-shadow-50.png"
        lightDinnerTable.className = "shadow-candle-dinner_table_50";
        lightDinnerTable.className += " shadow-candle-dinner-table"
      } else if (key == "candle" + abc && value == 0.75) {
        console.log(key + "check4")
        // for (var i = 0; i < varArrayCandle.length; i++) {
        //   varArrayCandle[i].src = "img/candle-25.gif"
        // }
        setTimeout(() => {
          lightBed.style.opacity = "0s"
        }, 10)
        setTimeout(() => {
          underlightBed.src = "img/candle_light_bed-shadow-75.png"
          underlightBed.className = "shadow-candle-bed_75";
          underlightBed.className += " shadow-candle-bed-2"
          underlightBed.style.opacity = "1";
        }, 100)
        // candleBed.src = "img/candle-100.gif"

        lightStones.src = "img/candle_light_stones-shadow-75.png"
        lightStones.className = "shadow-candle-stones_75";
        lightStones.className += " shadow-candle-stones"
        lightWorkTable.src = "img/candle_light_work_table-shadow-75.png"
        lightWorkTable.className = "shadow-candle_table_75";
        lightWorkTable.className += " shadow-candle-work-table"
        lightFireplace.src = "img/candle_light_fireplace-shadow-75.png"
        lightFireplace.className = "shadow-candle_fireplace_75";
        lightFireplace.className += " shadow-candle-fireplace"
        lightDinnerTable.src = "img/candle_light_table_dinner-shadow-75.png"
        lightDinnerTable.className = "shadow-candle-dinner_table_75";
        lightDinnerTable.className += " shadow-candle-dinner-table"
      } else if (key == "candle" + abc && value == 1) {
        console.log(key + "check5")
        // for (var i = 0; i < varArrayCandle.length; i++) {
        //   varArrayCandle[i].src = "img/candle-0.png"
        // }
        if (checkEnded == false) {
          setTimeout(() => {
            underlightBed.style.transition = "opacity 0.2s"
            underlightBed.style.opacity = "0"
          }, 10)
          setTimeout(() => {
            lightBed.src = "img/candle_light_bed-shadow-100.png"
            lightBed.className = "shadow-candle-bed_100";
            lightBed.className += " shadow-candle-bed"
            lightBed.style.opacity = "1";
          }, 100)
          checkEnded = true;
        }
        // candleBed.src = "img/candle-100.gif"
        lightStones.src = "img/candle_light_stones-shadow-100.png"
        lightStones.className = "shadow-candle-stones_100";
        lightStones.className += " shadow-candle-stones"
        lightWorkTable.src = "img/candle_light_work_table-shadow-100.png"
        lightWorkTable.className = "shadow-candle_table_100";
        lightWorkTable.className += " shadow-candle-work-table"
        lightFireplace.src = "img/candle_light_fireplace-shadow-100.png"
        lightFireplace.className = "shadow-candle_fireplace_100";
        lightFireplace.className += " shadow-candle-fireplace"
        lightDinnerTable.src = "img/candle_light_table_dinner-shadow-100.png"
        lightDinnerTable.className = "shadow-candle-dinner_table_100";
        lightDinnerTable.className += " shadow-candle-dinner-table"
      }
    }
  } //аррай сюда ебни мб по циклу заменять

}, 4998)

var timerBurn = setInterval(function() {
  for (let [key, value] of Object.entries(candle)) {
    // if (key == "candle1" && value == 0) {
    //   var abc = 0
    //   abc++
    //     candle['candle1']=abc
    //     console.log(key + " " + value)
    // }
    switch (value) {
      case 0:
        var abc = 0
        abc = abc + 0.25
        candle[key] = abc
        console.log(key + " " + value)
        break;
      case 0.25:
        var abc = value;
        abc = abc + 0.25;
        candle[key] = abc;
        console.log(key + " " + value)
        break;
      case 0.50:
        var abc = value;
        abc = abc + 0.25;
        candle[key] = abc;
        console.log(key + " " + value)
        break;
      case 0.75:
        var abc = value;
        abc = abc + 0.25;
        candle[key] = abc;
        console.log(key + " " + value)
        break;
      case 1:
        console.log(key + " " + value)
        break;
    }

  }
}, 5000)

function burn() {

}

//Function handleDragStart(), Its purpose is to store the id of the draggable element.
function handleDragStart(e) {
  e.dataTransfer.setData("text", this.id); //note: using "this" is the same as using: e.target.
} //end function


//The dragenter event fires when dragging an object over the target.
//The css class "drag-enter" is append to the targets object.
function handleDragEnterLeave(e) {
  // if(e.type == "dragenter" && this.className == "") {
  // 	this.className =  "droping"
  // } else {
  // 	this.className = " " //Note: "this" referces to the target element where the "dragenter" event is firing from.
  // }
} //end function



//Function handles dragover event eg.. moving your source div over the target div element.
//If drop event occurs, the function retrieves the draggable element’s id from the DataTransfer object.
function handleOverDrop(e) {
  e.preventDefault();
  //Depending on the browser in use, not using the preventDefault() could cause any number of strange default behaviours to occur.
  if (e.type != "drop") {
    return; //Means function will exit if no "drop" event is fired.
  }
  //Stores dragged elements ID in var draggedId
  var draggedId = e.dataTransfer.getData("text");
  //Stores referrence to element being dragged in var draggedEl
  var draggedEl = document.getElementById(draggedId);

  //if the event "drop" is fired on the dragged elements original drop target e.i..  it's current parentNode,
  //then set it's css class to ="" which will remove dotted lines around the drop target and exit the function.
  if (draggedEl.parentNode == this) {
    draggedEl.parentNode.className = " "
    // this.className = "";
    return; //note: when a return is reached a function exits.
  }
  //Otherwise if the event "drop" is fired from a different target element, detach the dragged element node from it's
  //current drop target (i.e current perantNode) and append it to the new target element. Also remove dotted css class.

  if (this.childElementCount == 0 && this.className == "droping") {
    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl); //Note: "this" references to the current target div that is firing the "drop" event.
  } else if (this.childElementCount <= 4 && this.className == "dropInv") {
    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
  }
} //end Function



//Retrieve two groups of elements, those that are draggable and those that are drop targets:
var draggable = document.querySelectorAll('[draggable]')
var targets = document.querySelectorAll('[data-drop-target]');
//Note: using the document.querySelectorAll() will aquire every element that is using the attribute defind in the (..)


//Register event listeners for the"dragstart" event on the draggable elements:
for (var i = 0; i < draggable.length; i++) {
  draggable[i].addEventListener("dragstart", handleDragStart);
}

//Register event listeners for "dragover", "drop", "dragenter" & "dragleave" events on the drop target elements.
for (var i = 0; i < targets.length; i++) {
  targets[i].addEventListener("dragover", handleOverDrop);
  targets[i].addEventListener("drop", handleOverDrop);
  targets[i].addEventListener("dragenter", handleDragEnterLeave);
  targets[i].addEventListener("dragleave", handleDragEnterLeave);
}


setTimeout(function() {
  var abbbb = document.querySelector(".cloud-shadow_npc")
  abbbb.style.opacity = "1"
}, 5000);


var sanity = 0;
var width = 1;
var testbutton = document.getElementById("testB");
testbutton.addEventListener("click", function() {
  move()
  sanityCheck()
})

function move() {
  var elem = document.getElementById("myBar");
  width++;
  elem.style.width = width + '%';
  if (width >= 100) {
    width--
  }
}

function sanityCheck() {
  var elem = document.getElementById("myBar");
  if (width == 0 || width <= 25) {
    elem.classList.remove()
    elem.classList.add("sanity-stable")
  } else if (width == 25 || width <= 50) {
    elem.classList.remove()
    elem.classList.add("sanity-problem")
  } else if (width == 50 || width <= 75) {
    elem.classList.remove()
    elem.classList.add("sanity-irrational")
  } else if (width == 75 || width <= 100) {
    elem.classList.remove()
    elem.classList.add("sanity-mad")
  }
}
