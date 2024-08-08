import React, { useContext } from 'react';
import { ChecklistContext } from './CheckListContext';

const Checklist = () => {
  const { checkedItems, handleCheckboxChange } = useContext(ChecklistContext);

  return (
    <div>
      <h1>Checklist</h1>
      <div>
        <label>
          <input
            type="checkbox"
            name="isCitizen"
            checked={checkedItems.isCitizen}
            onChange={handleCheckboxChange}
          />
         <h1> Are you a citizen?</h1>
        </label>
        <p>{checkedItems.isCitizen ? 'Yes' : 'No'}</p>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="hasDrivingLicense"
            checked={checkedItems.hasDrivingLicense}
            onChange={handleCheckboxChange}
          />
         <h1>Are You Over:21</h1>
        </label>
        <p>{checkedItems.hasDrivingLicense ? 'Yes' : 'No'}</p>
      </div>
      
    </div>
  );
};

export default Checklist;
