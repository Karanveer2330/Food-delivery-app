import React from 'react'
import { Link } from 'react-router-dom'
import "./Terms.css"
function Terms(props) {
  return (
    <div>
        
  <div className="term-box">
    <div className="term-text">
      <h2>Accept cookies and Terms of Service</h2>
      <p>Last Edit : 10/05/2023</p>
      <p>Greeting Users,</p>
      <p>By accessing our online food ordering system, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any of these terms, you may not use our services.To use our online food ordering system, you may be required to create an account. You must provide accurate and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
      <p>Our platform allows you to place orders for food from various restaurants and food establishments. By placing an order, you agree to pay the specified amount for the food, taxes, delivery charges, and any applicable fees. The availability of certain food items may be subject to change, and we reserve the right to refuse or cancel any order at our discretion.Prices for food items and services displayed on our platform are subject to change without notice. We strive to provide accurate and up-to-date information, but we do not guarantee the accuracy of pricing information. All payments made through our platform are processed securely. We may partner with third-party payment processors, and you agree to comply with their terms and conditions.</p>
      <p>We facilitate the delivery of food items from restaurants to your specified delivery address. Delivery times are estimates and may vary due to various factors, including traffic conditions and order volume. We are not responsible for delays in delivery. If you have any issues with the delivery, please contact us, and we will do our best to assist you.All content, including text, images, logos, and trademarks, on our platform is protected by intellectual property laws. You may not copy, distribute, modify, or reproduce any content without obtaining our prior written consent.
</p>
      <p>Our online food ordering system is provided on an "as is" and "as available" basis. We do not make any warranties or representations, whether express or implied, regarding the reliability, accuracy, or availability of our services.In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our platform, even if we have been advised of the possibility of such damages.</p>
      <p>We reserve the right to modify or update these Terms of Service at any time. Any changes will be effective immediately upon posting the revised terms on our platform. Your continued use of our services after the changes will constitute your acceptance of the modified terms.We may terminate or suspend your access to our platform at any time, without prior notice or liability, for any reason whatsoever, including if you breach these Terms of Service.</p>
      <p>These Terms of Service shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].</p>
    </div>
    
             <div class="checkbox">
    <input id="check" name="checkbox" type="checkbox" onClick={()=>props.changeit()} value={props.tick} onInput={props.onInput} />
    <label for="checkbox">
    <h4>I Agree to the <span>Accept cookies and Terms of Service</span> and I read the Privacy Notice.</h4>
    </label>
  </div>
    <div className="buttons">
    <Link to="/PPMenu">
  <button className="btn red-btn" type="submit" name="anmelden" class="button" id="btncheck" value="Send" disabled={props.tick} >Proceed</button>
            
            </Link>

    </div>
  </div>
  
  
        
    </div>
  )
}

export default Terms
