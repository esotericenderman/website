import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

const repos: string[] = [];

octokit.rest.repos
  .listForUser({
    username: "EsotericEnderman",
  })
  .then(({ data }) => {
    data.forEach((repo) => {
      console.log(repo.name);
      repos.push(repo.name);
    });
  });

console.log(repos);

export default function RepositoriesTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Repository Name</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr>
              <td>{repo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
