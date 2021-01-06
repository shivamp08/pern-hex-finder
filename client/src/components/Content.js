import React from "react";
import { SketchPicker, CirclePicker } from "react-color";
import Title from "./Title.js";
import { ReactSmartScroller } from "react-smart-scroller";
import "./stylesheets/Content.css";
import { toast } from "react-toastify";
const { Checkboard } = require("react-color/lib/components/common");

class Content extends React.Component {
  constructor(props) {
    super(props);
    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const rgba = {
      r: randomBetween(0, 255),
      g: randomBetween(0, 255),
      b: randomBetween(0, 255),
      a: 100,
    };
    const rgbToHex = (r, g, b) =>
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    this.state = {
      background: rgba,
      backgroundHex: rgbToHex(rgba.r, rgba.g, rgba.b),
      palette: this.props.initColors,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ palette: nextProps.initColors });
  }

  handleChange = (color) => {
    this.setState({
      background: color.rgb,
      backgroundHex: color.hex,
    });
  };

  handleCopyClick = () => {
    const el = document.createElement("textarea");
    el.value = this.state.backgroundHex.toUpperCase();
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast.success("🎉 Copied to Clipboard!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "success",
    });
  };

  handleRandomClick = () => {
    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const rgba = {
      r: randomBetween(0, 255),
      g: randomBetween(0, 255),
      b: randomBetween(0, 255),
      a: this.state.background.a,
    };
    const rgbToHex = (r, g, b) =>
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    this.setState({
      background: rgba,
      backgroundHex: rgbToHex(rgba.r, rgba.g, rgba.b),
    });
  };

  handleAddToPalette = () => {
    const newArr = [...this.state.palette, this.state.backgroundHex];
    if (this.props.setCurrPalette) {
      this.props.setCurrPalette(newArr.join());
      console.log("updated");
    }
    this.setState({
      palette: newArr,
    });
  };

  handleRemoveFromPalette = () => {
    const newArr = this.state.palette;
    newArr.splice(newArr.indexOf(this.state.backgroundHex), 1);
    if (this.props.setCurrPalette) {
      this.props.setCurrPalette(newArr.join());
      console.log("deleted");
    }
    this.setState({
      palette: newArr,
    });
  };

  handlePaletteClick = (e, data) => {
    const hexToRgb = (hex) => {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            a: 100,
          }
        : null;
    };

    this.setState({
      background: hexToRgb(data),
      backgroundHex: data,
    });
  };

  renderCircles = () => {
    return this.state.palette.map((hex, index) => (
      <div
        key={hex}
        style={
          index === 0
            ? { marginTop: 10, marginLeft: 5 }
            : { marginTop: 10, marginLeft: 20 }
        }
        onClick={(e) => this.handlePaletteClick(e, hex)}
      >
        <CirclePicker width={50} colors={[hex]} circleSize={50} />
      </div>
    ));
  };

  render() {
    return (
      <div
        className="container-fluid root"
        style={{
          backgroundColor: `rgba(${this.state.background.r},${this.state.background.g},${this.state.background.b}, 0.1)`,
        }}
      >
        <div
          className="container-fluid content-div"
          style={{
            backgroundColor: `rgba(${this.state.background.r},${this.state.background.g},${this.state.background.b}, 0.25)`,
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.15)",
          }}
        >
          <br />
          <Title
            size={200}
            text1="HEX"
            text2="FINDER"
            open={true}
            stroke={this.state.backgroundHex}
          />
          <div className="row color-picker">
            <div className="col-xl-6">
              <div style={{ display: "inline-block", marginTop: 50 }}>
                <SketchPicker
                  color={this.state.background}
                  onChange={this.handleChange}
                  width={400}
                />
                <div id="buttons" style={{ marginTop: 10 }}>
                  <button
                    id="copybtn"
                    type="button"
                    className="btn btn-primary"
                    style={{
                      float: "left",
                      backgroundColor: "rgba(0,0,0,0.65)",
                      border: "0",
                    }}
                    onClick={this.handleCopyClick}
                  >
                    <i className="fas fa-clipboard"></i> CopyHex
                  </button>
                  {this.state.palette.includes(this.state.backgroundHex) ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{
                        float: "center",
                        border: "0",
                      }}
                      onClick={this.handleRemoveFromPalette}
                    >
                      <i className="fas fa-palette"></i> Remove from Palette
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{
                        float: "center",
                        backgroundColor: "rgba(0,0,0,0.65)",
                        border: "0",
                      }}
                      onClick={this.handleAddToPalette}
                    >
                      <i className="fas fa-palette"></i> Add to Palette
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      float: "right",
                      backgroundColor: "rgba(0,0,0,0.65)",
                      border: "0",
                    }}
                    onClick={this.handleRandomClick}
                  >
                    <i className="fas fa-random"></i> Random
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6"
              style={{ display: "inline-block", marginTop: 50 }}
            >
              <div
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  boxShadow:
                    "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)",
                  width: 420,
                  height: 400,
                  margin: "0 auto",
                  marginBottom: 10,
                }}
              >
                <Checkboard
                  white={`rgba(${this.state.background.r},${this.state.background.g},${this.state.background.b},${this.state.background.a})`}
                  grey={
                    this.state.background.a === 0
                      ? "rgba(0,0,0,.08)"
                      : `rgba(${this.state.background.r},${this.state.background.g},${this.state.background.b},${this.state.background.a})`
                  }
                />
              </div>
              <div style={{ margin: "0 auto", width: 420 }}>
                <ReactSmartScroller
                  thumb={
                    <div
                      style={{
                        width: 150,
                        height: 10,
                        backgroundColor: "rgba(0,0,0,0.65)",
                      }}
                    />
                  }
                >
                  {this.renderCircles()}
                </ReactSmartScroller>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
