
async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}
fetchUserData()
  .then((userData) => {
    
    console.log('Fetched Data:', userData);

   
    const modifiedData = userData.map((user) => ({
      Name: user.name,
      Username: user.username,
      Email: user.email,
      Address: user.address.street,
      Phone: user.phone,
      Website: user.website,
      Company: user.company.name,
    }));
    console.log('Modified Data:', modifiedData);

const filteredData = modifiedData.filter((user) =>
      user.Email.endsWith('.biz')
    );
    console.log('Filtered Data:', filteredData);

    const sortedData = modifiedData.slice().sort((a, b) =>
      a.Name.localeCompare(b.Name)
    );
    console.log('Sorted Data:', sortedData);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });