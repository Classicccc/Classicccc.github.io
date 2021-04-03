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