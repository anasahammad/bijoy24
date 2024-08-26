'use server'
export async function googleLogin(formData: FormData){
    const action = formData.get('action');
    console.log(action)
}