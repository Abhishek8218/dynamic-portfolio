
export async function fetchUserData() {
    const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
    if (!response.ok) {
       throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('API Response:', data);
    return data;
   }
   