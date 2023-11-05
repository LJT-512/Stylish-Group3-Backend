import pool from "./databasePool.js";
import { z } from "zod";

export async function createCoupon(
  type: string,
  title: string,
  discount: number,
  startDate: string,
  expiredDate: string,
  amount: number
) {
  try {
    const results = await pool.query(
      `INSERT INTO coupons (type, title, discount, startDate, expiredDate, amount)
      VALUES(?, ?, ?, ?, ?, ?);`,
      [type, title, discount, startDate, expiredDate, amount]
    );
    return results;
  } catch (error) {
    console.log(`createcoupon model is error by ${error}`);
  }
}
export async function searchCoupon() {
  try {
    const results = await pool.query(`SELECT * FROM coupons`);
    return results[0];
  } catch (error) {
    console.log(`searchCoupon model is error by ${error}`);
  }
}