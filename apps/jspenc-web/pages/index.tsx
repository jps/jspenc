import styled from '@emotion/styled';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <>
      <h1>James Spencer</h1>
      <p>
        Welcome to my corner of the internet, there's not much here at the moment
        but do feel free to browse some of my writing. or get in <a href="mailto:me@jspenc.com">contact.</a>
      </p>
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://newskit.co.uk">
            NewsKit
          </a>
        </li>
        <li>
          <a href="https://www.moonpig.com">
            Moonpig
          </a>
        </li>
        <li>
          <a href="https://seetickets.com">
            See Tickets
          </a>
        </li>
      </ul>
      <h2>Writing</h2>
      <ul>
        <li>
          <a href="https://medium.com/newskit-design-system/evolution-of-theming-in-newskit-design-system-4a35bb83617">
            Evolution of theming in NewsKit design system
          </a>
        </li>
        <li>
          <a href="http://ceur-ws.org/Vol-917/">
            Sentimentor: Sentiment Analysis of Twitter Data
          </a>
        </li>
        <li>
          <a href="https://jspenc435125156.wordpress.com/2020/12/12/a-windows-terminal-that-is-linux/">
            A Windows terminal that is Linux
          </a>
        </li>
      </ul>
    </>
  );
}

export default Index;
