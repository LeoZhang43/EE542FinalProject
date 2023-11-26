import React, { useState } from 'react';

const TrashCan = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className={`trash-can ${showInfo ? 'open' : ''}`}>
      <div className="trash-icon" onClick={handleClick}>
        🗑️ {/* Trash can icon */}
      </div>
      {showInfo && (
        <div className="trash-info">
          <h3>Trash Can Information</h3>
          <p>Location: XYZ</p>
          <p>Capacity: 100 gallons</p>
          {/* Add more information about the trash can */}
        </div>
      )}
    </div>
  );
};

export default TrashCan;
