import PropTypes from 'prop-types';
import css from './Section.module.css'
import React from 'react';

export const Section = ({ title, children }) => {
    return (
        <div className={css.section}>
            <h2 className={css.title}>{title}</h2>
            {children}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};