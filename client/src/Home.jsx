import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Home Page</h1>
      <img
        style={styles.image}
        src="https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-743986.jpg&fm=jpg" // Replace with your actual image URL
        alt="Sample"
      />
      <p style={styles.description}>
        Explore our website to discover amazing features and benefits. Sign up for an account to access exclusive content and personalized experiences. Already have an account? Simply log in to get started.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#004d40', // Dark green background color
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#fff', // White font color
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: '400px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '2.1',
  },
};

export default Home;
