export function getUser() {
  const numberForApi = document.querySelector("#publication h5.number-for-api");
  const numberForApi2 = document.querySelector(
    "#publication span.number-for-api"
  );
  const userNameOutput = document.querySelector(
    "#publication .comments:last-child .user-output-name h6"
  );
  const userCommentOutput = document.querySelector(
    "#publication .comments:last-child .user-output-comment p"
  );
  const fetcher = fetch(
    "https://636392ed37f2167d6f7ce510.mockapi.io/user-comments"
  );
  const fetcherToJson = fetcher.then((response) => {
    response.json().then((item) => {
      console.log(item);
      item.forEach((element) => {
        userNameOutput.innerHTML = `${element.userName}`;
        userCommentOutput.innerHTML = `${element.userComment}`;
        numberForApi.innerHTML = `(${element.id})`;
        numberForApi2.innerHTML = `(${element.id})`;
      });
    });
  });
}
