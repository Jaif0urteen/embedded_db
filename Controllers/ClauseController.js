const Clause = require('../Models/ClauseModel')

const addClause = async (req, res) => {
    let data = new Clause({ ...req.body, indate: new Date() })
    try {
        await data.save()
        res.status(200).send({ result: "Done", message: "Record Added Successfully", data: data })
    } catch (error) {
        if (error.keyVlaue) {
            console.log("Please Check Again...!!!");
        }
        res.status(500).send({ result: "Fail", message: "Internal Server Error..!!", error: error })
    }
}

const getClause = async (req, res) => {
    try {
        let parent_id = req.params.id
        const data = await Clause.findOne({ _id: parent_id })
        res.status(200).send({ result: "Done", message: "Record get Successfully", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error..!!", error: error })
    }
}
const AddSubCluse = async (req, res) => {
    try {
        let parent_id = req.params.id;
        console.log("Parent ID:", parent_id);

        const doc = await Clause.findOneAndUpdate(
            { _id: parent_id },
            { $push: { sub_clause: req.body } },
            { new: true }
        );

        if (!doc) {
            console.log("Document not found");
            return res.status(404).send({ result: "Fail", message: "Document not found" });
        }

        console.log("Updated document:", doc);
        res.status(200).send({ result: "Done", message: "Record updated successfully", data: doc });
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).send({ result: "Fail", message: "Internal Server Error", error: error });
    }
}

const updateSubCLause = async (req, res) => {
    const subClauseId = req.params.id
    req.body._id = subClauseId
    try {
        const result = await Clause.findOneAndUpdate(
            { 'sub_clause._id': subClauseId },
            { $set: { 'sub_clause.$': req.body } },
            { new: true }
        )
        console.log("Updated document:", result);
        res.status(200).send({ message: "Record updated successfully", data: result });
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error", error: error });
    }
}


module.exports = [addClause, getClause, AddSubCluse, updateSubCLause]