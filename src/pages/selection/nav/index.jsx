import React from 'react';
import useKey from 'react-use-key';
import { Link } from 'react-router-dom';
import * as routes from 'constants/routes';

const SelectionNavitation = () => {
  useKey('a', () => console.log('You pressed "a"'), null);
  return (
    <nav className="nav nav-justified">
          <Link to={routes.CANDIDATES} className="nav-item nav-link col-sm">Candidates</Link>
          <Link to={routes.CAPITAL} className="nav-item nav-link col-sm">Questions</Link>
          <Link to={routes.SCHEDULE} className="nav-item nav-link col-sm">Schedule</Link>
          <Link to={routes.REVIEW} className="nav-item nav-link col-sm">Review</Link>
    </nav>
  );
};

export default SelectionNavitation;
