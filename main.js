
const element = `
                    <div class="token__center-subtitle">
                        <span>Selling & Buying</span>
                    </div>
                    <div class="token__center-title">
                        <h3>Fast Growing</h3>
                    </div>
                    <div class="token__center-text">
                        <h4>
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                            viverra nulla ut metus varius laoreet.
                            Quisque rutrum. Aenean imperdiet.
                        </h4>
                    </div>
                        `
const element2 = `<div class="token__center-subtitle">
                                    <span>Development</span>
                                </div>
                                <div class="token__center-title">
                                    <h3>Trust your intuition</h3>
                                </div>
                                <div class="token__center-text">
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus impedit sapiente
                                        similique voluptas praesentium eaque vitae, aut voluptatem eligendi nisi ut
                                        quaerat assumenda, ab dolorem, tenetur voluptate delectus nesciunt! Quibusdam?
                                    </h4>
                                </div>`

document.querySelector('#left').addEventListener('mouseover', () =>  {
   document.querySelector('.token__center').classList.add('fade')
   document.querySelector('.token__center').innerHTML = element

})

document.querySelector('#straight').addEventListener('mouseover', () =>  {
   document.querySelector('.token__center').classList.add('fade2')
   document.querySelector('.token__center').innerHTML = element2
   

})

document.querySelector('.header__mobile-menu').addEventListener('click', () => {
    document.querySelector('.header-navbar').style.transition = "display 2s" 
    document.querySelector('.header-navbar').classList.toggle("nav-active");
    // console.log(1);
    // if(document.querySelector('.nav-active')) {
    // console.log(2);
    // // document.querySelector('.header-page').style.position = "static"
    // }
})







