like = document.querySelector('button[aria-label="Like"]');
dislike = document.querySelector('button[aria-label="Nope"]');



setInterval(() => {

  randomNo = Math.random()

    if (randomNo <= .90) // to like 50% of profiles,
      like.click()
    else 
      dislike.click()

}, 1000)