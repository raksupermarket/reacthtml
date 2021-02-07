import React from "react";

const Resto = () => (
  <div className="row">
    <h1 className="text-center">
      <strong>
        <a href="/" className="text-dark">
          Restoran Cafe Rumah makan
        </a>
      </strong>
    </h1>
    <div className="col-12 col-md-4 p-3 text-center">
      <div className="shadow rounded p-3 p-md-5">
        <h3>FastFood</h3>
        <img
          className="img-fluid shadow rounded"
          alt="mesin kasir restroan cafe"
          src="https://1.bp.blogspot.com/-s8eRVAFRFys/X9ggjkeXEjI/AAAAAAAALp8/J0hPl6v236Q3HPyevcIRZFGYukqp_3RMACLcBGAsYHQ/s1920/SOFTWARE%2BRESTORAN%2BMESIN%2BKASIR%2BRESTORAN%2BCAFE%2BKULINER%2BLENGKAP3.jpg"
        />
        <p>
          Special system digunakan dalam kebutuhan metode{" "}
          <a href="/" className="text-dark">
            fastfood
          </a>{" "}
          ,dimana system penjualan dengan metode pembayaran langsung saat
          pemesanan ready untuk digunakan .
        </p>
        <a
          href="https://youtu.be/ODjJwAPLRDw"
          class="btn btn-dark rounded-pill"
          target="_blank"
        >
          Play Demo
        </a>
      </div>
    </div>
    <div className="col-12 col-md-4 p-3 text-center">
      <div className="shadow rounded p-3 p-md-5">
        <h3>System Meja</h3>
        <img
          className="img-fluid shadow rounded"
          alt="mesin kasir restroan cafe"
          src="https://1.bp.blogspot.com/-WAJ-hlHdMok/X9ggkee5qnI/AAAAAAAALqA/c5K-oRRZKO8hsSyPq27cBRR_l27umoZOACLcBGAsYHQ/s1920/SOFTWARE%2BRESTORAN%2BMESIN%2BKASIR%2BRESTORAN%2BCAFE%2BKULINER%2BLENGKAP9.jpg"
        />
        <p>
          Metode transaksi dengan pencatatan meja pelanggan , dan melibatkan
          <a href="/" className="text-dark">
            waiters kasir kitchen
          </a>{" "}
          serta admin dalam bekerja untuk kebutuhan restoran rumah makan dengan
          metode meja.
        </p>{" "}
        <a
          href="https://youtu.be/nSM0Od3ku1Y"
          class="btn btn-dark rounded-pill"
          target="_blank"
        >
          Play Demo
        </a>
      </div>
    </div>
    <div className="col-12 col-md-4 p-3 text-center">
      <div className="shadow rounded p-3 p-md-5">
        <h3>Shared</h3>
        <img
          className="img-fluid shadow rounded"
          alt="mesin kasir restroan cafe"
          src="https://1.bp.blogspot.com/-neSYfbdgTz4/X9ggjUh7IKI/AAAAAAAALp4/px-ihEFCpEopwlO4xHTCYxQC_iNA9D0xwCLcBGAsYHQ/s1920/SOFTWARE%2BRESTORAN%2BMESIN%2BKASIR%2BRESTORAN%2BCAFE%2BKULINER%2BLENGKAP10.jpg"
        />
        <p>
          System digunakan untuk melakukan shared data baik offline mode dengan
          menggunakan wifi system dalam bekerja , maupun clouds databased{" "}
          <a href="/" className="text-dark">
            online
          </a>
          mode untuk digunakan.
        </p>
        <a
          href="https://youtu.be/9z6i5hifCOk"
          className="btn btn-dark rounded-pill"
          target="_blank"
        >
          Offline Demo
        </a>
        <a
          href="https://youtu.be/gGZcHO32mh4"
          className="btn btn-dark rounded-pill"
          target="_blank"
        >
          Online Demo
        </a>
      </div>
    </div>
    <div className="col-12 text-center p-3">
      <a
        href="https://mesinkasir.github.io/e-catalog/unipos-%20next%20level%20resto%20cafe%20system.pdf"
        class="btn btn-dark rounded-pill"
      >
        Download Now
      </a>
    </div>
  </div>
);

export default Resto;
