const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');
const footerListItems = document.querySelectorAll('.footerListItem');

// loading screen logic
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.querySelector('.loading');

  // Wait 4 seconds before hiding the loading screen
  setTimeout(() => {
    loadingScreen.classList.add('hidden');

    // Remove the loading screen from the DOM after the animation
    loadingScreen.addEventListener('transitionend', () => {
      loadingScreen.remove();
    });
  }, 4000); 
});

// Define products
const products = [
  {
    id: 1,
    title: 'Air Force',
    price: 6882.96,
    colors: [
      {
        code: 'black',
        img: './img/air.png',
      },
      {
        code: 'darkblue',
        img: './img/air2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 8618.16,
    colors: [
      {
        code: 'lightgray',
        img: './img/jordan.png',
      },
      {
        code: 'green',
        img: './img/jordan2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Blazer',
    price: 7461.36,
    colors: [
      {
        code: 'lightgray',
        img: './img/blazer.png',
      },
      {
        code: 'green',
        img: './img/blazer2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Crater',
    price: 6304.56,
    colors: [
      {
        code: 'black',
        img: './img/crater.png',
      },
      {
        code: 'lightgray',
        img: './img/crater2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Hippie',
    price: 5726.16,
    colors: [
      {
        code: 'gray',
        img: './img/hippie.png',
      },
      {
        code: 'black',
        img: './img/hippie2.png',
      },
    ],
  },
];

// Initial chosen product
let chosenProduct = products[0];

const currentProductImg = document.querySelector('.productImage');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

// Update the product details based on the selected item
const updateProduct = (index) => {
  // Change the current slide
  wrapper.style.transform = `translateX(${-100 * index}vw)`;

  // Change the chosen product
  chosenProduct = products[index];

  // Update the text and image for the chosen product
  currentProductTitle.textContent = chosenProduct.title.toUpperCase();
  currentProductPrice.textContent = '₱' + chosenProduct.price;
  currentProductImg.src = chosenProduct.colors[0].img;

  // Update color options
  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = chosenProduct.colors[index].code;
  });
};

// Handle menu item clicks
menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    updateProduct(index);
  });
});

// Handle footer item clicks (scroll to section within #nav)
footerListItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const targetId = item.getAttribute('data-target');  // Get target section ID
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth', // Smooth scrolling to the section
      });
    }
    
    // Optional: Update the product as well
    const index = parseInt(item.getAttribute('data-index'));
    updateProduct(index);  // This will still update the product details based on the index
  });
});


// Handle color selection
currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

// Handle size selection
currentProductSizes.forEach((size) => {
  size.addEventListener('click', () => {
    // Reset all sizes to default
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    });

    // Select the clicked size
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});

// Handle product purchase button click
productButton.addEventListener('click', () => {
  // Change window location to shoe2.html instead of opening a payment screen
  window.location.href = 'shoe2.html';
});

const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});

close.addEventListener('click', () => {
  payment.style.display = 'none';
});
