const range = (start, end, step = 1) => {
  end = end - 1;
  if (start > end) {
    step = -step;
  }
  const length = Math.floor(Math.abs((end - start) / step)) + 1;
  return Array.from(Array(length), (x, index) => start + index * step);
};

const cidr2mask = (cidr) => {
  let mask = [];
  for (let i = 0; i < 4; i++) {
    let n = Math.min(cidr, 8);
    mask.push(256 - Math.pow(2, 8 - n));
    cidr -= n;
  }
  return mask;
};

export const calculateSubnet = (ip) => {
  let [address, cidr] = ip.split("/");

  address = address.split(".").map((x) => parseInt(x));
  cidr = parseInt(cidr);

  let mask = cidr2mask(cidr);
  let network = range(0, 4).map((i) => address[i] & mask[i]);
  let broadcast = range(0, 4).map(
    (i) => (address[i] & mask[i]) | (255 ^ mask[i])
  );

  return {
    address: address.join("."),
    mask: mask.join("."),
    cidr: `${cidr}`,
    network: network.join("."),
    broadcast: broadcast.join("."),
  };
};
