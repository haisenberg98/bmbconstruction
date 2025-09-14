"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        BMB Construction &amp; Services Ltd. Your Auckland construction partner for over 30 years.
        <br />
        Ready for your next project? Contact us today for a consultation. One call, one solution for all your
        building, renovation, and property maintenance needs.
      </motion.p>

      <motion.div
        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="mb-3 text-xl font-semibold">Contact Information</h3>
          <div className="space-y-2">
            <p>
              <strong>Company:</strong> BMB Construction &amp; Services Ltd
            </p>
            <p>
              <strong>Mobile:</strong> 022 043 8005
            </p>
            <p>
              <strong>Email:</strong> johnny@bmbconstruction.co.nz
            </p>
            <p>
              <strong>Service Area:</strong> Auckland Wide
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="mb-3 text-xl font-semibold">Our Services</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Residential Builds and Renovations</li>
            <li>Kitchen and Bathroom Upgrades</li>
            <li>Villa Restoration and Heritage Homes</li>
            <li>Property Maintenance and Repairs</li>
            <li>Insurance Work and Project Management</li>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
}
