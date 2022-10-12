const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
  
}

function createFaq() {
  for (const faq of faqData) {
    let element = document.createElement('div')
    element.classList.add("faq")

    let faqHeader = document.createElement('div')
    faqHeader.classList.add('faq_header')
    
    let h3 = document.createElement('h3')
    h3.innerText = faq['question']
    faqHeader.appendChild(h3)

    
    let p = document.createElement('p')
    p.innerText = faq['answer']
    p.classList.add('answer','hidden')
    
    
    let btn = document.createElement('div')
    btn.classList.add('show_btn')
    btn.innerText = '+'
    btn.style.textAlign = 'center'
    let clicked = false
    btn.addEventListener('click',()=>{
      clicked = !clicked
      clicked ? p.style.display = "block" : p.style.display = "none"
    })
    faqHeader.appendChild(btn)
    
    element.appendChild(faqHeader)
    faqs.push(element)
    accordianBody.appendChild(element)
    element.append(p)
  }
}

function btnStatusUpdate() {
  
}
createFaq()