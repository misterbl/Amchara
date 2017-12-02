import React from 'react';


const BottomButtons = () => (
  <div className="flex">
    <div className="col-xs-12 col-sm-4">
      <h2><strong> 20,7K </strong></h2>
      <p><small>Followers</small></p>
      <button className="btn btn-success btn-block"><span className="fa fa-plus-circle"></span> Contacts </button>
    </div>
    <div className="col-xs-12 col-sm-4">
      <h2><strong>245</strong></h2>
      <p><small>Following</small></p>
      <button className="btn btn-info btn-block"><span className="fa fa-user"></span> Activities </button>
    </div>
    <div className="col-xs-12 col-sm-4">
      <h2><strong>43</strong></h2>
      <p><small>Messages</small></p>
      <button type="button" className="btn btn-primary btn-block"><span className="fa fa-gear"></span> Messages </button>
    </div>
  </div>

);

export default BottomButtons
