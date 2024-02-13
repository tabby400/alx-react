import React from "react";
import BodySection from "./BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = ({ title, children }) => (
  <div className={css(styles.bodySectionWithMargin)}>
    <BodySection title={title}>{children}</BodySection>
  </div>
);

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '20px',
  },
});

export default BodySectionWithMarginBottom;
