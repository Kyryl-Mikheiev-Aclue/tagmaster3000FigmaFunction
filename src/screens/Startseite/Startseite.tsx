import React from "react";
import { Button } from "../../components/Button";
import { Fab } from "../../components/Fab";
import { FooterDark } from "../../components/FooterDark";
import { SearchFilled } from "../../components/SearchFilled";
import { Stack } from "../../components/Stack";
import { TextField } from "../../components/TextField";
import { Typography } from "../../components/Typography";
import { Menufilled1 } from "../../icons/Menufilled1";
import "./style.css";

export const Startseite = (): JSX.Element => {
  return (
    <div className="startseite">
      <div className="div-2">
        <div className="frame">
          <div className="fotos-wrapper">
            <div className="fotos">
              <div className="overlap-group">
                <img
                  className="element"
                  alt="Element"
                  src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/20221028-210440@2x.png"
                />
                <img
                  className="DW"
                  alt="Dw"
                  src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/dw--v4a2989-72dpi@2x.png"
                />
                <img
                  className="DW-va-dpi"
                  alt="Dw"
                  src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/dw--v4a3320-72dpi@2x.png"
                />
              </div>
              <img
                className="b-meeting-juni"
                alt="B meeting juni"
                src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/b-meeting-juni-22-7@2x.png"
              />
              <div className="overlap">
                <img
                  className="DW-2"
                  alt="Dw"
                  src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/dw--v4a2985-72dpi@2x.png"
                />
                <img
                  className="b-meeting-juni-2"
                  alt="B meeting juni"
                  src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/b-meeting-juni-22-13@2x.png"
                />
              </div>
              <img
                className="DW-3"
                alt="Dw"
                src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/dw--v4a3053-72dpi@2x.png"
              />
              <img
                className="DW-4"
                alt="Dw"
                src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/dw--v4a3345-72dpi@2x.png"
              />
              <img
                className="b-meeting-juni-3"
                alt="B meeting juni"
                src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/b-meeting-juni-22-3@2x.png"
              />
              <img
                className="DW-5"
                alt="Dw"
                src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/dw--v4a3117-72dpi@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="frame-2" />
        <footer className="footer">
          <div className="overlap-2">
            <FooterDark
              className="footer-dark-instance"
              hasFooterText={false}
              width="full"
            />
            <Fab
              baseClassName="design-component-instance-node"
              className="fab-instance"
              color="default"
              hasButton={false}
              size="large"
              stateProp="enabled"
              variant="extended"
            />
          </div>
        </footer>
        <div className="tags">
          <Button
            className="button-instance"
            color="primary"
            label="LABEL"
            size="small"
            stateProp="disabled"
            variant="contained"
          />
          <Button
            className="button-3"
            color="primary"
            label="LABEL"
            size="small"
            stateProp="disabled"
            variant="contained"
          />
          <Button
            className="button-4"
            color="primary"
            label="LABEL"
            size="small"
            stateProp="disabled"
            variant="contained"
          />
          <Button
            className="button-5"
            color="primary"
            label="LABEL"
            size="small"
            stateProp="disabled"
            variant="contained"
          />
          <Button
            className="button-6"
            color="primary"
            label="LABEL"
            size="small"
            stateProp="disabled"
            variant="contained"
          />
          <Button
            className="button-7"
            color="primary"
            label="LABEL"
            size="small"
            stateProp="disabled"
            variant="contained"
          />
          <Button
            className="button-8"
            color="primary"
            label="LABEL"
            size="small"
            stateProp="disabled"
            variant="contained"
          />
          <Button
            className="button-9"
            color="primary"
            label="LABEL"
            size="small"
            stateProp="disabled"
            // variant="contained"
          />
        </div>
        <div className="searchbar">
          <TextField
            className="text-field-instance"
            hasValue
            label="Search"
            minHeightClassName="text-field-2"
            size="small"
            stateProp="enabled"
            value="Value"
            variant="outlined"
          />
          <SearchFilled className="search-filled-instance" />
        </div>
        <div className="app-bar">
          <div className="paper">
            <div className="toolbar">
              <div className="left-side">
                <Menufilled1 className="menu-filled" />
                <Typography
                  className="design-component-instance-node-2"
                  content="Tagmaster 3000"
                  gutterBottom={false}
                  variant="h-4"
                />
              </div>
              <div className="min-height-3" />
              <Stack
                className="design-component-instance-node-2"
                direction="row"
                instances="one"
                spacing="zero"
                visible={false}
              />
            </div>
          </div>
        </div>
        <img
          className="image"
          alt="Image"
          src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/image-2@2x.png"
        />
      </div>
    </div>
  );
};
