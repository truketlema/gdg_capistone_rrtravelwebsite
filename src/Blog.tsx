import { useState } from 'react';
import './Blog.css'


const Blog = () => {
  // State for comment form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: ''
  });

  // State for newsletter subscription
  const [subscribed, setSubscribed] = useState(false);
  const [subscriptionEmail, setSubscriptionEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    console.log('Comment submitted:', formData);
    alert('Thank you for your comment!');
    setFormData({ name: '', email: '', website: '', comment: '' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', subscriptionEmail);
    setSubscribed(true);
    setSubscriptionEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    
    
    <div className="travel-blog-page">
      <div className="top-bar">
        <div className="logo">🧭 REBEL ROVER</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Packages</a>
          <a href="#">Destination</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="header">
        <h1>Travel Stories For Now and the Future</h1>
        <div className="meta">👤 Hasmar · 📅 February 18, 2024 · 🏷 Stories, Tips</div>
      </div>
      <div className="content-wrapper">
        {/* Left Main */}
        <div>
          <img
            className="main-image"
            src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde"
            alt="Travel Story"
          />
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
        <div className="sidebar">
          {/* Recent Posts */}
          <div className="sidebar-box">
            <h3>Recent Post</h3>
            <div className="sidebar-post">
              <img src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde" alt="" />
              <div className="sidebar-post-details">
                Travel Stories for Now and the Future
                <span>Feb 2024</span>
              </div>
            </div>
            <div className="sidebar-post">
              {/* <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" alt="" /> */}
              <div className="sidebar-post-details">
                Simple Travel Destination in 2024
                <span>Feb 2024</span>
              </div>
            </div>
            <div className="sidebar-post">
              {/* <img src="https://images.unsplash.com/photo-1549887534-3f67e5a4033f" alt="" /> */}
              <div className="sidebar-post-details">
                How Are We Going to Travel in 2025?
                <span>Feb 2024</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="sidebar-box categories">
            <h3>Categories</h3>
            <ul>
              <li>Travel</li>
              <li>Tips</li>
              <li>Destination</li>
              <li>Review</li>
            </ul>
          </div>
        
      {/* Blog Post Content */}
      <article className="blog-post-content">
        <header className="post-header">
          <h1 className="post-title">Rice Terraces, Tegallalang</h1>
        </header>

        <div className="post-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla portidut. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officio deserunt mollit anim id est laborum.
          </p>
        </div>

        <section className="contact-section">
          <h3 className="contact-heading">Have Any Question?</h3>
          <p className="contact-text">
            Do not hesitate to give us a call. We are an expert team and we are happy to tell to you.
          </p>
          <address className="contact-info">
            <a href="tel:+6266436996" className="contact-phone">+62 6643 6996</a>
            <a href="mailto:contact@abmair.com" className="contact-email">contact@abmair.com</a>
          </address>
        </section>

        <div className="post-divider"></div>

        <footer className="post-footer">
          <div className="post-tags">
            <span className="tag-label">Toga :</span>
            <span className="post-tag">Destination</span>
            <span className="post-tag">Travel</span>
          </div>
          <div className="social-share">
            <span className="share-label">Share This :</span>
            {/* Social icons would go here */}
          </div>
        </footer>
      </article>

      {/* Comment Section */}
      <section className="comment-section">
        <h3 className="section-title">Leave a Reply</h3>
        <p className="form-note">Your email address will not be published. Required fields are marked *</p>
        
        <form onSubmit={handleSubmitComment} className="comment-form">
          <div className="form-group">
            <label htmlFor="comment" className="form-label">Comment*</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="form-textarea"
              required
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="website" className="form-label">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="save-info"
              className="form-checkbox"
            />
            <label htmlFor="save-info" className="checkbox-label">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          
          <button type="submit" className="submit-button">Post Comment</button>
        </form>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter-section">
        <h4 className="newsletter-title">Subscribe to get special price</h4>
        <p className="newsletter-text">
          Don't extend this something to the user just now and get special
          promotion and marketing newsletter
        </p>
        
        <form onSubmit={handleSubscribe} className="subscription-form">
          <input
            type="email"
            value={subscriptionEmail}
            onChange={(e) => setSubscriptionEmail(e.target.value)}
            placeholder="Type your email here"
            className="subscription-input"
            required
          />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </section>
      <footer>
    <div className="footer">
      {/* <!-- Logo & About --> */}
      <div className="footer-column">
        <div className="footer-logo">
          {/* <img src="https://via.placeholder.com/150x40?text=REBEL+ROVER" alt="REBEL ROVER"> */}
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra condimentum.</p>
      </div>

      {/* <!-- Contact Info --> */}
      <div className="footer-column contact-info">
        <h4>Contact Information</h4>
        <p><i className="fas fa-map-marker-alt"></i> 732 Despard St, Atlanta</p>
        <p><i className="fas fa-phone"></i> +97 888 8888</p>
        <p><i className="fas fa-envelope"></i> info@traveller.com</p>
      </div>

      {/* <!-- Quick Links --> */}
      <div className="footer-column">
        <h4>Quick Link</h4>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Tours</a>
        <a href="#">Contact</a>
      </div>

      {/* <!-- Social Icons --> */}
      <div className="footer-column">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      Copyright © All rights reserved (Website Developed & Managed by CREATIVETECHROMA)
    </div>
  </footer>
  </div>
    </div>
    </div>
  );
};




export default Blog;