"use client";
import Link from "next/link";
import { useMemo } from "react";

export default function AboutSection() {
  // Simple calculation for the progress width — matches "Collection - $5M" of "Goal - $10M"
  const collected = 5_000_000;
  const goal = 10_000_000;
  const percent = useMemo(
    () => Math.max(0, Math.min(100, Math.round((collected / goal) * 100))),
    [collected, goal]
  );

  const checkIcon =
    "https://cdn.prod.website-files.com/62b2a013e2866c75039c37cb/62b2e571abc525b2538dc5bf_Check%20List.svg";

  const leftList = ["Food Donation", "Money Donation", "Dress Donation"];
  const rightList = ["Water Supply", "Education Donation", "Toys Donation"];

  return (
    <div className="about-us-section">
      <div className="container w-container">
        <div className="w-layout-grid about-us-grid">
          {/* Left: About text */}
          <div className="about-us-content-wrap">
            <div className="section-title-wrap">
              <p className="sub-title pink">About Us</p>
              <h2 className="section-title">
                <br />
                Uplift Lives,
                <br />
                Our Core Mission
              </h2>
            </div>
            <div className="section-content-wrap">
              <p>
                We believe in doing more—with you. A small act of <br /> generosity can
                protect a child, restore dignity, <br /> and move Soulrise forward.
                <br />
                <br />
                Partner with Food For The Poor to nourish bodies <br /> and uplift
                spirits—one person, one family, one future. <br /> <br /> Be the change the
                world needs.
              </p>
            </div>
            <div className="about-us-button-wrap">
              <Link href="/about" className="button large w-button">
                More About
              </Link>
            </div>
          </div>

          {/* Right: Donation checklist + Total Donation */}
          <div className="donation-content-wrap">
            {/* Checklist in two columns */}
            <div className="donation-list-content-wrap">
              <div className="donation-list-content">
                {leftList.map((item) => (
                  <div className="donation-list" key={item}>
                    <div className="donation-list-image">
                      <img src={checkIcon} alt="List item icon" />
                    </div>
                    <div className="donation-list-text">
                      <p className="donation-points">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="donation-list-content">
                {rightList.map((item) => (
                  <div className="donation-list" key={item}>
                    <div className="donation-list-image">
                      <img src={checkIcon} alt="List item icon" />
                    </div>
                    <div className="donation-list-text">
                      <p className="donation-points">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Donation with progress */}
            <div className="total-donation-wrap">
              <div className="total-donation-content">
                <h2 className="donation-item-title">Total Donation</h2>
              </div>

              <div className="donation-progress-bar">
                <div className="donation-total-progress">
                  {/* Webflow used a .progress-bar with an opacity animation.
                      Here we compute width based on collected/goal for a stable React impl. */}
                  <div
                    className="progress-bar"
                    style={{ width: `${percent}%`, opacity: 1 }}
                  />
                </div>
              </div>

              <div className="total-donation">
                <h3 className="donation-needed-amount">Collection - $5M</h3>
                <h3 className="goal-title">Goal - $10M</h3>
              </div>

              <div className="home-page-about-button-wrap">
                <Link href="/project" className="white-button large w-button">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
