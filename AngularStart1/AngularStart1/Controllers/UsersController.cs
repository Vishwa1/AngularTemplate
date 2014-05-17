using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularStart1.Models;

namespace AngularStart1.Controllers
{
    /// <summary>
    /// API controller to manage users
    /// </summary>
    public class UsersController : ApiController
    {

        List<User> usersData = new List<User>()
        {
            new User{Id=1, FirstName="John", LastName="Smith", Gender=Gender.Male,Mobile="9999999991",Email="john@demo.com", City="kn", State="as", Country="usa",Zip="12401"},
            new User{Id=2, FirstName="Adam", LastName="Gril",Gender=Gender.Female, Mobile="9999999992",Email="adam@demo.com", City="bk",State="al", Country="usa",Zip="99701"},
            new User{Id=3, FirstName="James", LastName="Franklin",Gender=Gender.Male, Mobile="9999999993",Email="james@demo.com", City="js",State="nj", Country="usa",Zip="07097"},
            new User{Id=4, FirstName="Vicky", LastName="Merry" ,Gender=Gender.Female, Mobile="9999999994",Email="vicky@demo.com", City="ol",State="ny", Country="usa",Zip="14760"},
            new User{Id=5, FirstName="Cena", LastName="Rego",Gender=Gender.Male, Mobile="9999999995",Email="cena@demo.com", City="as",State="tx", Country="usa",Zip="78610"}
        };
        public IEnumerable<User> Get()
        {
            // Return a static list of users
            return usersData;
        }

        public User Put(User user)
        {
            //Update the user
            return user;
        }

        public User Post(User user)
        {
            return null;
        }
    }
}
