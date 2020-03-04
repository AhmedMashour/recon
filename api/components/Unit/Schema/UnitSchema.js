const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
module.exports = ({
  rentersType,
  unitTypes,
  PricePer,
  requestStatus,
  pendingStatus,
  currencies,
  unitServices
}) => {
  const Unit = new Schema(
    {
      userId: {
        type: ObjectId,
        ref: 'User'
      },
      type: {
        type: String,
        enum: unitTypes,
        required: true
      },
      description: {
        type: String,
        required: true,
        min: 5,
        max: 500
      },
      image: {
        type: String,
        required: true
      },
      currency: {
        type: String,
        enum: currencies,
        required: true
      },
      rentersType: {
        type: String,
        enum: rentersType,
        required: true
      },
      numberOfPeople: {
        type: Number,
        required: true
      },
      numberOfRooms: {
        type: Number,
        required: true
      },
      hasFurniture: {
        type: Boolean,
        default: false
      },
      availableCountNow: {
        type: Number,
        default: 1
      },
      pricePerPerson: {
        type: Number,
        required: true
      },
      daiyOrMonthly: {
        type: String,
        enum: PricePer
      },
      highlight: {
        type: String
      },
      availability: [
        {
          from: {
            type: Date
          },
          to: {
            type: Date
          }
        }
      ],
      address: new Schema(
        {
          government: {
            type: String,
            required: true
          },
          street: {
            type: String,
            required: true
          },
          nearTo: {
            type: String
          },
          highlight: {
            type: String
          },
          houseNumber: {
            type: String,
            required: true
          },
          apartmentNumber: {
            type: String,
            required: true
          },
          floorNumber: {
            type: String,
            required: true
          }
        },
        {
          _id: false
        }
      ),
      services: [
        {
          type: String,
          enum: unitServices
        }
      ],
      ownerTerms: [
        {
          type: String,
          min: 2,
          max: 255
        }
      ],
      gallery: [
        {
          type: String
        }
      ],
      status: {
        type: String,
        enum: requestStatus,
        default: pendingStatus
      },
      reasonOfRefuse: {
        type: String,
        default: 'there is an request accept in your time before'
      },
      totalOnlineBooking: {
        type: Number,
        default: 0
      },
      totalRevenue: {
        type: Number,
        default: 0
      },
      isHidden: {
        type: Boolean,
        default: false
      },
      isArchived: {
        type: Boolean,
        default: false
      }
    },
    {
      timestamps: true,
      autoIndex: true
    }
  );

  Unit.path('address').required(true);
  return mongoose.model('Unit', Unit);
};
