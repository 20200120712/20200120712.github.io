const categoryLinks = document.querySelectorAll("li > a")

categoryLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault()
    const target = document.querySelector(link.hash)
    target.scrollIntoView({
      behavior: "smooth"  
    })   
  })
})
