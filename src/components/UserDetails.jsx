import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Specialities, Speciality, Category, Infos, Card} from './Styles.jsx'

export class UserDetails extends Component {
  render() {
    const {description, dob, email, gender, name, website, specialities} = this.props.user
    const categories = [
      {title: "About me", text: description},
      {title: "Gender", text: gender},
      {title: "Date of birth", text: dob},
      {title: "Email", text: email}
    ]
    return (
          <div>
            <h2>{name}</h2>
            {categories.map(category => (
              <div key={category.title}>
              <Card className="w3-card-4" >
                <header className="w3-container">
                  <Category>{category.title}</Category>
                </header>
                <div className="w3-container"><Infos>{category.text}</Infos></div>
              </Card><br/></div>
            ))}
            <Card className="w3-card-4" >
              <header className="w3-container">
                <Category>"Website"</Category>
              </header>
              <div className="w3-container"><a style={{marginLeft: '30%'}} href={website}>{website}</a></div>
            </Card><br/>
            <Card className="w3-card-4" >
              <header className="w3-container">
                <Category>Specialities</Category>
              </header>
              <div className="w3-container"><Infos>
                <Specialities>
                  {specialities && specialities.map(speciality => (
                    <div key={speciality}>
                      <Speciality className="label label-info tags">{speciality}</Speciality>
                      <br/></div>
                    ))}
                  </Specialities>
              </Infos></div>
            </Card>
          </div>
        );
      }
    }

    const mapStateToProps = state => ({
      user: state.user,
    });

    const mapDispatchToProps = {
    };

    export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
