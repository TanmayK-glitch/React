import Header from './header.jsx'
import Footer from './footer.jsx'
import Food from './Fruits.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to My Website!</h2>
        <p>This is the main content area where you can add your projects, blog posts, or any other content.</p>
        <div className="card">
          <h3>Featured Project</h3>
          <p>This is a sample project card. You can add more content here.</p>
        </div>
      </main>
      <Food />
      <Footer />
    </>
  );
}

export default App
