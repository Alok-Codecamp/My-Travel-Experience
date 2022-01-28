import React from 'react';
import './BlogPost.css';
const BlogPost = () => {
    return (
        <div className="card mt-10 mb-10">
        <div className="card__header">
          <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" className="card__image" width="600"/>
        </div>
        <div className="card__body">
          <span className="tag tag-red">Automobile</span>
          <h4>Race to your heart content</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
        </div>
        <div className="card__footer">
          <div className="user">
            <img src="https://i.pravatar.cc/40?img=3" alt="user__image" className="user__image"/>
            <div className="user__info">
              <h5>John Doe</h5>
              <small>2d ago</small>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BlogPost;