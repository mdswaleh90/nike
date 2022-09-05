//store the products array in localstorage as "data"

function submit(e){
      e.preventDefault();
      let form=document.getElementById(product_form)
      let brand=form.product_brand.value
      let name=form.product_name.value
      let price=form.product_price.value
      let image=form.product_image.value

      localStorage.setItem("form")
}
