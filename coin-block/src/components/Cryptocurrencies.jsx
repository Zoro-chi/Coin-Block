import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Col, Row, Card, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  console.log(cryptos);

  return (
    <>
      <Row gutters={[32, 32]} className="crypto-card-container">
        {cryptos.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crpto-card" key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={crypto.iconUrl}
                    style={{ width: "50px", objectFit: "contain" }}
                  />
                }
                hoverable
              >
                <p> Price: {millify(crypto.price)} </p>
                <p> Market Cap: {millify(crypto.marketCap)} </p>
                <p> 24h Change: {millify(crypto.change)}% </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
