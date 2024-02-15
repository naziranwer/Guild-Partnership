//  // JavaScript function to change the background image and tagline
//  let slideIndex = 0;
//  const slides = [
//    { image: 'assets/bg-image1.png', tagline: 'Precision in Quantity Surveying' },
//    { image: 'assets/bg-image2.jpg', tagline: 'Tagline 2' },
//    { image: 'assets/bg-image3.jpg', tagline: 'Tagline 3' },
//    // Add more image and tagline pairs as needed
//  ];

//  function changeSlide() {
//    slideIndex = (slideIndex + 1) % slides.length;
//    const currentSlide = slides[slideIndex];
//    console.log("current image",currentSlide.image);
//    document.querySelector('.hero-section').style.backgroundImage = `url('${currentSlide.image}')`;
//    document.querySelector('.tagline').textContent = currentSlide.tagline;
//  }