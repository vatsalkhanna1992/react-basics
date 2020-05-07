import React from "react";

class ListAndKeys extends React.Component {
  render() {
    const links = [
      { key: "my-account", item: "My Account" },
      { key: "my-profile", item: "My Profile" },
      { key: "my-orders", item: "My Orders" },
      { key: "my-wallet", item: "My Wallet" }
    ];
    const listItems = links.map(link => (
      <li>
        <a href={"/" + link.key} key={link.key}>
          {link.item}
        </a>
      </li>
    ));
    return <ul>{listItems}</ul>;
  }
}

export default ListAndKeys;
