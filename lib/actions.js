'use server';

export async function shareMeal(formData){
    const meal = {
      title: formData.get('title'),
      summary:formData.get('summary'),
      image:formData.get('image'),
      creator:formData.get('name'),
      email:formData.get('email')
    }

    console.log(meal)

  }