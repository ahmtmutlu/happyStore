import React from 'react';

const Feedbacks = () => {
  return (
    <div className='container-feedbacks'>
      <h1 className='header'>Please write your thoughts below</h1>
      <form>
        <textarea placeholder='You can write here...'></textarea>
      </form>
    </div>
  );
}

export default Feedbacks;
