class Dog {
  constructor(data) {
    Object.assign(this, data)
  }
  getProfileHTML() {
    const {avatar, name, age, bio, hasBeenLiked, hasBeenSwiped} = this
    return `
    <div class="profile-container">
      <img src="${avatar}" alt="Photo of ${name} the dog" class="profile-img" id="${name}">
      <img src="./images/badge-like.png" alt="Like badge" class="img-badge ${!hasBeenLiked ? "hidden": ""}">
      <img src="./images/badge-nope.png" alt="Nope badge" class="img-badge ${!hasBeenLiked && hasBeenSwiped ? "" : "hidden"}" >
      <div class="profile-text">
        <h2>${name}, ${age}</h2>
        <h3>${bio}</h3>
      </div> 
    </div>
    <div class="btns-container">
      <button 
        class="dislike-btn ${!hasBeenLiked && hasBeenSwiped ? "red-bg" : ""}" 
        data-nope="${name}"
      >
        <i class="fa-solid fa-xmark" data-nope="${name}"></i>
      </button>  
      <button 
        class="like-btn ${hasBeenLiked ? "green-bg" : ""}" 
          data-like="${name}"
      >
        <i class="fa-solid fa-heart" data-like="${name}"></i>
      </button>
    </div>
    `
  }
  sethasBeenLikedtoTrue() {
    this.hasBeenLiked = true
    this.sethasBeenSwipedtoTrue()
  }
  sethasBeenSwipedtoTrue() {
    this.hasBeenSwiped = true
  }

}

export {Dog}