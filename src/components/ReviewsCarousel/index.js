import { Component } from "react";
import "./index.css";

class ReviewsCarousel extends Component {
  state = {
    activeReview: 0
  };

  onClickRightArrow = () => {
    const { activeReview } = this.state;
    const { reviewsList } = this.props;

    if (activeReview < reviewsList.length - 1) {
      this.setState((prevState) => ({
        activeReview: prevState.activeReview + 1
      }));
    }
  };

  renderActiveReview = (reviewDetails) => {
    const { imgUrl, username, companyName, description } = reviewDetails;

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    );
  };

  onClickLeftArrow = () => {
    const { activeReview } = this.state;

    if (activeReview > 0) {
      this.setState((prevState) => ({
        activeReview: prevState.activeReview - 1
      }));
    }
  };

  render() {
    const { reviewsList } = this.props;
    const { activeReview } = this.state;
    const currentReviewDetails = reviewsList[activeReview];

    return (
      <div className="bg">
        <div className="carousel">
          <h1 className="review-head">Reviews</h1>
          <div className="container">
            <button
              type="button"
              onClick={this.onClickLeftArrow}
              testid="leftArrow"
              className="arrow-button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.renderActiveReview(currentReviewDetails)}
            <button
              type="button"
              onClick={this.onClickRightArrow}
              testid="rightArrow"
              className="arrow-button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ReviewsCarousel;
