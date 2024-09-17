/**
 * Contains the miscellaneous route handlers.
 * @author Walid Horri <https://github.com/origotdaskill>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
