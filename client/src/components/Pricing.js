import React from 'react';
import "./Pricing.css"; // Import the CSS file

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Trello your way.</h1>
        <p>Trusted by millions, Trello powers teams all around the world. Explore which option is right for you.</p>
      </div>
      
      {/* Free Plan */}
      <div className="pricing-plan">
        <h2>Free</h2>
        <p>$0 USD</p>
        <p>Free for your whole team</p>
        <p>For individuals or teams looking to organize any project.</p>
        <p>Included in Free:</p>
        <ul>
          <li>Unlimited cards</li>
          <li>Up to 10 boards per Workspace</li>
          <li>Unlimited Power-Ups per board</li>
          <li>Unlimited storage (10MB/file)</li>
          <li>250 Workspace command runs per month</li>
          <li>Custom backgrounds & stickers</li>
          <li>Unlimited activity log</li>
          <li>Assignee and due dates</li>
          <li>iOS and Android mobile apps</li>
          <li>2-factor authentication</li>
        </ul>
        <a href="#" className="btn">Get Started</a> {/* Button */}
      </div>
      
      {/* Standard Plan */}
      <div className="pricing-plan">
        <h2>Standard</h2>
        <p>$5 USD</p>
        <p>Per user/month if billed annually ($6 billed monthly)</p>
        <p>For small teams that need to manage work and scale collaboration.</p>
        <p>Everything in Free, plus:</p>
        <ul>
          <li>Unlimited boards</li>
          <li>Advanced checklists</li>
          <li>Custom Fields</li>
          <li>Unlimited storage (250MB/file)</li>
          <li>1,000 Workspace command runs per month</li>
          <li>Single board guests</li>
          <li>Saved searches</li>
        </ul>
        <a href="#" className="btn">Choose Standard</a>
      </div>
      
      {/* Premium Plan */}
      <div className="pricing-plan">
        <h2>Premium</h2>
        <p>$10 USD</p>
        <p>Per user/month if billed annually ($12.50 billed monthly)</p>
        <p>For teams that need to track and visualize multiple projects in several ways.</p>
        <p>Everything in Standard, plus:</p>
        <ul>
          <li>Views: Calendar, Timeline, Table, Dashboard, and Map</li>
          <li>Workspace views: Table and Calendar</li>
          <li>Unlimited Workspace command runs</li>
          <li>Atlassian Intelligence (AI)</li>
          <li>Admin and security features</li>
          <li>Workspace-level templates</li>
          <li>Collections</li>
          <li>Observers</li>
          <li>Simple data export</li>
        </ul>
        <a href="#" className="btn">Choose Premium</a>
      </div>

      {/* Enterprise Plan */}
      <div className="pricing-plan">
        <h2>Enterprise</h2>
        <p>$17.50 USD</p>
        <p>Per user/month - billed annually ($210.00 annual price per user)</p>
        <p>For organizations that need to connect work across teams with more security and controls.</p>
        <p>Everything in Premium, plus:</p>
        <ul>
          <li>Unlimited Workspaces</li>
          <li>Organization-wide permissions</li>
          <li>Organization-visible boards</li>
          <li>Public board management</li>
          <li>Multi-board guests</li>
          <li>Attachment permissions</li>
          <li>Power-Up administration</li>
          <li>Free SSO and user provisioning with Atlassian Access</li>
        </ul>
        <a href="#" className="btn">Get Enterprise</a>
      </div>

      {/* Feature Comparison Table */}
      <table className="features-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Free</th>
            <th>Standard</th>
            <th>Premium</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unlimited boards</td>
            <td>false</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Custom Fields</td>
            <td>false</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Power-Up administration</td>
            <td>false</td>
            <td>false</td>
            <td>false</td>
            <td>true</td>
          </tr>
          {/* Add more rows as necessary */}
        </tbody>
      </table>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>What is a Workspace?</p>
        <p>A Workspace is where your projects and teams can organize and collaborate.</p>
        <p>Can I switch plans later?</p>
        <p>Yes! You can upgrade or downgrade your plan anytime from your account settings.</p>
        {/* Add more FAQs as needed */}
      </div>
    </div>
  );
}

export default Pricing;
