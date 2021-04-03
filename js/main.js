const mainBody = document.getElementById("main")
const infoBody = document.getElementById("about-project")

mainBody.onclick = () =>
{
    moveY(mainBody, 0, -100)
    moveY(infoBody, 0, -100)
}

infoBody.onclick = () =>
{
    moveY(mainBody, -100, 0)
    moveY(infoBody, -100, 0)
}

function moveY(body, translate1, translate2)
{
    let anime = body.animate([
        {
            transform: 'translateY('+translate1+'%)',
        },
        {
            transform: 'translateY('+translate2+'%)',
        }
    ], {
        duration: 1000,
        easing: "ease"
    })
    anime.addEventListener('finish', function() {
        body.style.transform = 'translateY('+translate2+'%)'
    });
}

const caption = document.getElementById("caption")
let timerId
caption.onmouseover = () =>
{
    let visible = false;
    timerId = setInterval(() => blinking(), 100);
    document.getElementById("cursor").style.visibility = "visible"
}
caption.onmouseout = () =>
{
    document.getElementById("typewriter").textContent = "G"
    document.getElementById("cursor").style.visibility = "hidden"
    clearInterval(timerId)
    turn = 1
    iteration = 1
    sign = 1
    word = "G"
}

words = ["Generation", "Graphs"]
turn = 1
iteration = 1
sign = 1
word = "G"

function blinking()
{
    if ((sign == 1) && (words[turn].length > iteration))
    {
        word = words[turn].substr(0, iteration+1)
        iteration += sign
    }
    else if ((sign == 1) && (words[turn].length == iteration))
    {
        sign = -1
    }
    else if ((sign == -1) && (iteration > 0))
    {
        word = words[turn].substr(0, iteration+1)
        iteration += sign
    }
    else if ((sign == -1) && (0 == iteration))
    {
        sign = 1
        if (turn == 0)
        {
            turn = 1
        }
        else turn = 0
    }

    document.getElementById("typewriter").textContent = word

    // if (window.getComputedStyle(document.getElementById("cursor")).visibility == "visible")
    //     document.getElementById("cursor").style.visibility = "hidden"
    // else document.getElementById("cursor").style.visibility = "visible"
}